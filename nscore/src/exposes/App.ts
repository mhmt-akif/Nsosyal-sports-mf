// Host'a (nsosyal) açılan "./App" modülünün giriş noktası.
//
// Geliştirme modunda Vite, React dosyalarına Fast Refresh kodu ekler ve bu kod
// Vite'ın kendi index.html'inin yüklediği bir başlangıç betiğini (preamble) bekler.
// Host bir Next.js sayfası olduğu için o betik yoktur; burada kendimiz yüklüyoruz.
// Production build'de bu import boştur.
import '@vitejs/plugin-react/preamble'

export { default } from '../App'
