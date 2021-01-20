


class Rumah {
    constructor(name, tingkat, luas){
        this.nama =nama;
        this.tingkat = tingkat;
        this.luas=luas;
        console.log("construktor jalan" + name);
    }
    bukaGarasi(){
        console.log("garasi terbuka" + this.nama)
    }
}

let rumahNurul = new Rumah("nurul");