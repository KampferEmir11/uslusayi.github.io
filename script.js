document.querySelector(".hesapla").addEventListener("click" , function(){
    const tabanOlustur = document.querySelector(".taban").value;
    const usOlustur = document.querySelector(".us").value;
    const sonuc = Math.pow(tabanOlustur , usOlustur);
    document.querySelector(".deger").textContent = sonuc;
    document.querySelector(".deger").style.fontSize="50px";
    document.querySelector(".deger").style.transform=`translateY(-25%)`
    document.querySelector(".deger").style.position = "absolute";
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".taban").value = '';
    document.querySelector(".us").value = '';
    document.querySelector(".deger").textContent = "?"
    document.querySelector(".deger").style.marginTop="350px"
})