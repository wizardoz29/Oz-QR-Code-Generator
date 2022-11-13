const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')


const onGenerateSubmit = (e) =>{
    e.preventDefault();
    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    // const pcolor = document.getElementById('pcolor').value;
    // const scolor = document.getElementById('scolor').value;

    if(url === ""){
        alert("Please enter a valid URL 🥱")
    } else{
        showSpinner();
        setTimeout(() =>{
            hideSpinner()
            generateQRCode(url, size);

            setTimeout(() => {
                const saveURL = qr.querySelector('img').src;
                createDownloadBtn(saveURL);
            }, 50 );
        }, 1000)
    }
};

const generateQRCode = (url, size, pcolor, scolor) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        // colorDark : pcolor,
        // colorLight : scolor,
    })
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = "block";
} 
const hideSpinner = () => {
    document.getElementById('spinner').style.display = "none";
} 

const clearUI = () => {
    qr.innerHTML ="";
    const downloadBtn = document.getElementById('save-link');
    if (downloadBtn) downloadBtn.remove();
}

// const createDownloadBtn = (saveURL) => {
//     const link = document.createElement('a');
//     link.id = "save-link";
//     link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5 download-btn'
//     link.href= saveURL;
//     link.download= 'qrcode'
//     link.innerHTML = "Download QR Code"
//     document.getElementById('generated').appendChild(link);
// }

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);