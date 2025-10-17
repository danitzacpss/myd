import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

export default function QRGenerator() {
  const canvasRefPink = useRef<HTMLCanvasElement>(null)
  const canvasRefBlack = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRefPink.current) {
      QRCode.toCanvas(canvasRefPink.current, 'https://www.michaelydanitza.cl', {
        width: 400,
        margin: 2,
        color: {
          dark: '#E1AAB9',
          light: '#FFFFFF'
        }
      })
    }

    if (canvasRefBlack.current) {
      QRCode.toCanvas(canvasRefBlack.current, 'https://www.michaelydanitza.cl', {
        width: 400,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
    }
  }, [])

  const downloadQR = (canvasRef: React.RefObject<HTMLCanvasElement>, filename: string) => {
    if (canvasRef.current) {
      const url = canvasRef.current.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = filename
      link.href = url
      link.click()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Códigos QR - Invitación de Boda
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {/* QR Rosa */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center mb-4 text-palo-rosa-500">
            Versión Rosa
          </h2>
          <div className="bg-white p-4 rounded-lg flex justify-center">
            <canvas ref={canvasRefPink} />
          </div>
          <p className="text-center mt-4 text-gray-600 font-semibold">
            www.michaelydanitza.cl
          </p>
          <button
            onClick={() => downloadQR(canvasRefPink, 'qr-michaelydanitza-rosa.png')}
            className="mt-6 w-full bg-palo-rosa-500 hover:bg-palo-rosa-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Descargar QR Rosa
          </button>
        </div>

        {/* QR Negro */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
            Versión Negro
          </h2>
          <div className="bg-white p-4 rounded-lg flex justify-center">
            <canvas ref={canvasRefBlack} />
          </div>
          <p className="text-center mt-4 text-gray-600 font-semibold">
            www.michaelydanitza.cl
          </p>
          <button
            onClick={() => downloadQR(canvasRefBlack, 'qr-michaelydanitza-negro.png')}
            className="mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Descargar QR Negro
          </button>
        </div>
      </div>
    </div>
  )
}
