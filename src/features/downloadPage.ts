import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

function downloadPage(domRef: HTMLElement | null) {
  if (domRef !== null) {
    html2canvas(domRef, {
      scrollY: -window.scrollY,
    }).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, '전세계약_십계명.png')
        }
      })
    })
  } else {
    return
  }
}

export default downloadPage
