const encrypt = () => {
    var encrypted = CryptoJS.AES.encrypt(
       document.getElementById("text").value,
       document.getElementById("password").value
    );

    // show the result
    document.getElementById("encrypted").innerHTML = "Encrypted: " + encrypted;
    document.getElementById("decrypted").innerHTML = "";
 }

const decrypt = () => {
    let decrypted = CryptoJS.AES.decrypt(
       document.getElementById("text").value,
       document.getElementById("password").value
    ).toString(CryptoJS.enc.Utf8);

    // show the result
    document.getElementById("decrypted").innerHTML = "Decrypted: " + decrypted;
    document.getElementById("encrypted").innerHTML = "";
 }