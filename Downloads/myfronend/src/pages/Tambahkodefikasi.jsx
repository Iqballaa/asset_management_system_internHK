import React, { useEffect } from "react";
import "../styles/tambahkodefikasi.css";

const Tambahkodefikasi = () => {
  useEffect(() => {
    const selectNamaRuas = document.getElementById("nama_ruas");
    const inputKodeRuas = document.getElementById("kode_ruas");
    const inputLokasiRuas = document.getElementById("lokasi_ruas");
    const selectNamaGerbang = document.getElementById("nama_gerbang");
    const inputKodeGerbang = document.getElementById("kode_gerbang");
    const inputLokasiGerbang = document.getElementById("lokasi_gerbang");
    const selectNamaKategori = document.getElementById("nama_kategori");
    const inputKodeKategori = document.getElementById("kode_kategori");
    const selectNamaSubkategori = document.getElementById("nama_subkategori");
    const inputKodeSubkategori = document.getElementById("kode_subkategori");

    const handleRuasChange = (event) => {
      const selectedOption = event.target.value;

      switch (selectedOption) {
          case "Bakter":
            inputKodeRuas.value = "01";
            inputLokasiRuas.value = "-6.2453722, 106.8730924";
            break;
          case "Terpeka":
            inputKodeRuas.value = "02";
            inputLokasiRuas.value = "-4.215138, 105.137298";
            break;
          case "Palindra":
            inputKodeRuas.value = "03";
            inputLokasiRuas.value = "-3.2083403, 104.6810543";
            break;
          case "Permai":
            inputKodeRuas.value = "04";
            inputLokasiRuas.value = "0.6432625, 101.447031";
            break;
          case "Pekbang":
            inputKodeRuas.value = "05";
            inputLokasiRuas.value = "0.3843625, 101.02139059";
            break;
          case "Mebi":
            inputKodeRuas.value = "06";
            inputLokasiRuas.value = "3.645428, 98.540387";
            break;
          case "Binbat":
            inputKodeRuas.value = "07";
            inputLokasiRuas.value = "3.7506759, 98.4537421";
            break;
          case "Sibanceh":
            inputKodeRuas.value = "08";
            inputLokasiRuas.value = "5.5088903, 95.4309268";
            break;
          case "JORR-S":
            inputKodeRuas.value = "09";
            inputLokasiRuas.value = "-6.3073887, 106.8823824";
            break;
          case "ATP":
            inputKodeRuas.value = "10";
            inputLokasiRuas.value = "-6.1159979, 106.8918944";
            break;
          case "Bengtab":
            inputKodeRuas.value = "11";
            inputLokasiRuas.value = "-3.73756249, 102.4460625";
            break;
        default:
          break;
      }
    };

    const handleGerbangChange = (event) => {
      const selectedOption = event.target.value;

      switch (selectedOption) {
        case "GT Terbanggi Besar":
          inputKodeGerbang.value= "01";
          inputLokasiGerbang.value = "-6.2453722, 106.8730924";
          break;
        case "GT Gunung sugih":
          inputKodeGerbang.value = "02";
          inputLokasiGerbang.value = "-4.215138, 105.137298";
          break;
        case "GT Tegineneng":
          inputKodeGerbang.value= "03";
          inputLokasiGerbang.value = "-3.2083403, 104.6810543";
          break;
        case "GT Natar":
          inputKodeGerbang.value = "04";
          inputLokasiGerbang.value = "0.6432625, 101.447031";
          break;
        case "GT Kotabaru":
          inputKodeGerbang.value = "05";
          inputLokasiGerbang.value = "0.3843625, 101.02139059";
          break;
        case "GT Lematang":
          inputKodeGerbang.value = "06";
          inputLokasiGerbang.value = "3.645428, 98.540387";
          break;
        case "GT Sidomulyo":
          inputKodeGerbang.value = "07";
          inputLokasiGerbang.value = "3.7506759, 98.4537421";
          break;
        case "GT Kalianda":
          inputKodeGerbang.value = "08";
          inputLokasiGerbang.value = "5.5088903, 95.4309268";
          break;
        case "GT Kayu Agung":
          inputKodeGerbang.value = "09";
          inputLokasiGerbang.value = "-6.3073887, 106.8823824";
          break;
        case "GT Simpang Pematang":
          inputKodeGerbang.value = "10";
          inputLokasiGerbang.value = "-6.1159979, 106.8918944";
          break;
        case "GT Way Kenanga":
          inputKodeGerbang.value = "11";
          inputLokasiGerbang.value = "-3.73756249, 102.4460625";
          break;
          case "GT Lambu Kibang":
          inputKodeGerbang.value= "01";
          inputLokasiGerbang.value = "-6.2453722, 106.8730924";
          break;
        case "GT Menggala":
          inputKodeGerbang.value = "02";
          inputLokasiGerbang.value = "-4.215138, 105.137298";
          break;
        case "GT Terbanggi Besar-5":
          inputKodeGerbang.value = "02";
          inputLokasiGerbang.value = "-4.215138, 105.137298";
          break;     
        case "GT Palembang":
          inputKodeGerbang.value = "04";
          inputLokasiGerbang.value = "0.6432625, 101.447031";
          break;
        case "GT Pemulutan":
          inputKodeGerbang.value = "05";
          inputLokasiGerbang.value = "0.3843625, 101.02139059";
          break;
        case "GT KTM Rambutan":
          inputKodeGerbang.value = "06";
          inputLokasiGerbang.value = "3.645428, 98.540387";
          break;
        case "GT Indralaya":
          inputKodeGerbang.value = "07";
          inputLokasiGerbang.value = "3.7506759, 98.4537421";
          break;
        case "GT Dumai":
          inputKodeGerbang.value = "08";
          inputLokasiGerbang.value = "5.5088903, 95.4309268";
          break;
        case "GT Bathin Solapan":
          inputKodeGerbang.value = "09";
          inputLokasiGerbang.value = "-6.3073887, 106.8823824";
          break;
        case "GT Pinggir":
          inputKodeGerbang.value = "10";
          inputLokasiGerbang.value = "-6.1159979, 106.8918944";
          break;
        case "GT Kandis Utara":
          inputKodeGerbang.value = "11";
          inputLokasiGerbang.value = "-3.73756249, 102.4460625";
          break;
          case "GT Kandis Selatan":
          inputKodeGerbang.value= "01";
          inputLokasiGerbang.value = "-6.2453722, 106.8730924";
          break;
        case "GT Minas":
          inputKodeGerbang.value = "02";
          inputLokasiGerbang.value = "-4.215138, 105.137298";
          break;
        case "GT Pekanbaru":
          inputKodeGerbang.value= "03";
          inputLokasiGerbang.value = "-3.2083403, 104.6810543";
          break;
        case "GT Bangkinang":
          inputKodeGerbang.value = "04";
          inputLokasiGerbang.value = "0.6432625, 101.447031";
          break;
        case "GT Binjai":
          inputKodeGerbang.value = "05";
          inputLokasiGerbang.value = "0.3843625, 101.02139059";
          break;
        case "GT Semayang":
          inputKodeGerbang.value = "06";
          inputLokasiGerbang.value = "3.645428, 98.540387";
          break;
        case "GT Helvetia":
          inputKodeGerbang.value = "07";
          inputLokasiGerbang.value = "3.7506759, 98.4537421";
          break;
        case "GT Marelan 1":
          inputKodeGerbang.value = "08";
          inputLokasiGerbang.value = "5.5088903, 95.4309268";
          break;
        case "GT Marelan 2":
          inputKodeGerbang.value = "09";
          inputLokasiGerbang.value = "-6.3073887, 106.8823824";
          break;
        case "GT Stabat":
          inputKodeGerbang.value = "10";
          inputLokasiGerbang.value = "-6.1159979, 106.8918944";
          break;
        case "GT Baitussalam":
          inputKodeGerbang.value = "11";
          inputLokasiGerbang.value = "-3.73756249, 102.4460625";
          break;
          case "GT Kuta Baro":
          inputKodeGerbang.value= "01";
          inputLokasiGerbang.value = "-6.2453722, 106.8730924";
          break;
        case "GT Blang Bintang":
          inputKodeGerbang.value = "02";
          inputLokasiGerbang.value = "-4.215138, 105.137298";
          break;
        case "GT Indaraputri":
          inputKodeGerbang.value= "03";
          inputLokasiGerbang.value = "-3.2083403, 104.6810543";
          break;
        case "GT Jantho":
          inputKodeGerbang.value = "04";
          inputLokasiGerbang.value = "0.6432625, 101.447031";
          break;
        case "GT Seulimeum":
          inputKodeGerbang.value = "05";
          inputLokasiGerbang.value = "0.3843625, 101.02139059";
          break;
        case "GT Padang Tiji":
          inputKodeGerbang.value = "06";
          inputLokasiGerbang.value = "3.645428, 98.540387";
          break;
        case "GT Ciputat 1":
          inputKodeGerbang.value = "07";
          inputLokasiGerbang.value = "3.7506759, 98.4537421";
          break;
        case "GT Fatmawati 1":
          inputKodeGerbang.value = "08";
          inputLokasiGerbang.value = "5.5088903, 95.4309268";
          break;
        case "GT Ampera 1":
          inputKodeGerbang.value = "09";
          inputLokasiGerbang.value = "-6.3073887, 106.8823824";
          break;
        case "GT Lt Agung 3":
          inputKodeGerbang.value = "10";
          inputLokasiGerbang.value = "-6.1159979, 106.8918944";
          break;
        case "GT Dukuh 1":
          inputKodeGerbang.value = "11";
          inputLokasiGerbang.value = "-3.73756249, 102.4460625";
          break;
          case "GT Dukuh 3":
          inputKodeGerbang.value= "01";
          inputLokasiGerbang.value = "-6.2453722, 106.8730924";
          break;
        case "GT Gedong 1":
          inputKodeGerbang.value = "02";
          inputLokasiGerbang.value = "-4.215138, 105.137298";
          break;
        case "GT Lt Agung 1":
          inputKodeGerbang.value= "03";
          inputLokasiGerbang.value = "-3.2083403, 104.6810543";
          break;
        case "GT Ampera 2":
          inputKodeGerbang.value = "04";
          inputLokasiGerbang.value = "0.6432625, 101.447031";
          break;
        case "GT Fatmawati 2":
          inputKodeGerbang.value = "05";
          inputLokasiGerbang.value = "0.3843625, 101.02139059";
          break;
        case "GT Lt Agung 2":
          inputKodeGerbang.value = "06";
          inputLokasiGerbang.value = "3.645428, 98.540387";
          break;
        case "GT Gedong 2":
          inputKodeGerbang.value = "07";
          inputLokasiGerbang.value = "3.7506759, 98.4537421";
          break;
        case "GT Kp. Rambutan":
          inputKodeGerbang.value = "08";
          inputLokasiGerbang.value = "5.5088903, 95.4309268";
          break;
        case "GT Pasar Rebo":
          inputKodeGerbang.value = "09";
          inputLokasiGerbang.value = "-6.3073887, 106.8823824";
          break;
        case "GT Koja Direct":
          inputKodeGerbang.value = "10";
          inputLokasiGerbang.value = "-6.1159979, 106.8918944";
          break;
        case "GT Koja Timur":
          inputKodeGerbang.value = "11";
          inputLokasiGerbang.value = "-3.73756249, 102.4460625";
          break;
          case "GT Koja Barat":
          inputKodeGerbang.value= "01";
          inputLokasiGerbang.value = "-6.2453722, 106.8730924";
          break;
        case "GT Kebon Bawang":
          inputKodeGerbang.value = "02";
          inputLokasiGerbang.value = "-4.215138, 105.137298";
          break;
        case "GT Semper 2":
          inputKodeGerbang.value= "03";
          inputLokasiGerbang.value = "-3.2083403, 104.6810543";
          break;
        case "GT Semper 1":
          inputKodeGerbang.value = "04";
          inputLokasiGerbang.value = "0.6432625, 101.447031";
          break;
        case "STA 0+000 ":
          inputKodeGerbang.value = "07";
          inputLokasiGerbang.value = "3.7506759, 98.4537421";
          break;
        case "STA 01+050 ":
          inputKodeGerbang.value = "08";
          inputLokasiGerbang.value = "5.5088903, 95.4309268";
          break;
        case "	STA 0+000 ":
          inputKodeGerbang.value = "09";
          inputLokasiGerbang.value = "-6.3073887, 106.8823824";
          break;
        case "STA 16+725":
          inputKodeGerbang.value = "10";
          inputLokasiGerbang.value = "-6.1159979, 106.8918944";
          break;

        default:
          break;
      }
    };

    const handleKategoriChange = (event) => {
      const selectedOption = event.target.value;

      switch (selectedOption) {
          case "Alat Bantu & Pemeliharaan Konstruksi":
            inputKodeKategori.value = "11";
            break;
          case "Kendaraan":
            inputKodeKategori.value = "12";
            break;
          case "Sarana Elektronik":
            inputKodeKategori.value = "13";
            break;
          case "Kelengkapan":
            inputKodeKategori.value = "14";
            break;
          case "Jalan utama dan Jalan akses":
            inputKodeKategori.value = "15";
            break;
          case "Struktur jalan utama":
            inputKodeKategori.value = "16";
            break;
          case "Furniture":
            inputKodeKategori.value = "17";
            break;
        default:
          break;
      }
    };

    const handleSubkategoriChange = (event) => {
      const selectedOption = event.target.value;

      switch (selectedOption) {
        case "	Genset ":
          inputKodeSubkategori.value = "11-01";
          break;
        case "Kendaraan yang dipinjamkan ke PJR":
          inputKodeSubkategori.value = "12-02";
          break;
        case "	TCT Programable Keyboard":
          inputKodeSubkategori.value = "13-01";
          break;
        case "TCT Monitor LED":
          inputKodeSubkategori.value = "13-02";
          break;
        case "	TCT FO Konverter	":
          inputKodeSubkategori.value = "13-03";
          break;
        case "CST":
          inputKodeSubkategori.value = "13-04";
          break;
        case "	VCD":
          inputKodeSubkategori.value = "13-05";
          break;
        case "OBS":
          inputKodeSubkategori.value = "13-06";
          break;
        case "LTS	":
          inputKodeSubkategori.value = "13-07";
          break;
        case "	LVD Card Detector":
          inputKodeSubkategori.value = "13-08";
          break;
        case "ALB":
          inputKodeSubkategori.value = "13-09";
          break;
        case "CDP":
          inputKodeSubkategori.value = "13-10";
          break;
        case "	CCTV Transaksi + tiang":
          inputKodeSubkategori.value = "13-11";
          break;
        case "	GTO Enttrance Multi Incl CCTV Gandar + Tiang	":
          inputKodeSubkategori.value = "13-12";
          break;
        case "ASD":
          inputKodeSubkategori.value = "13-13";
          break;
        case "	LLA	":
          inputKodeSubkategori.value = "13-14";
          break;
        case "	AVC":
          inputKodeSubkategori.value = "13-15";
          break;
        case "	Peralatan Multi Golongan ":
          inputKodeSubkategori.value = "13-16";
          break;
        case "	Printer Kiosk ":
          inputKodeSubkategori.value = "13-17";
          break;
        case "LPR":
          inputKodeSubkategori.value = "13-18";
          break;
        case "PID":
          inputKodeSubkategori.value = "13-19";
          break;
        case "CSR":
          inputKodeSubkategori.value = "13-20";
          break;
        case "CDP	":
          inputKodeSubkategori.value = "13-21";
          break;
        case "FO Converter Transaksi":
          inputKodeSubkategori.value = "13-22";
          break;
        case "Camera + Tiang braket CCTV Transaksi	":
          inputKodeSubkategori.value = "13-23";
          break;
        case "Kamera CCTV dalam gardu	":
          inputKodeSubkategori.value = "13-24";
          break;
        case "Smartbooth single":
          inputKodeSubkategori.value = "13-25";
          break;
        case "	FO Ethernet Card Converter":
          inputKodeSubkategori.value = "13-26";
          break;
        case "CST":
          inputKodeSubkategori.value = "13-27";
          break;
        case "Printer Kartu	":
          inputKodeSubkategori.value = "13-28";
          break;
        case "Smartbooth Multi ":
          inputKodeSubkategori.value = "13-29";
          break;
        case "UPS":
          inputKodeSubkategori.value = "13-30";
          break;
        case "PDB":
          inputKodeSubkategori.value = "13-31";
          break;
        case "	Monitor, Keyboard, Mouse dan Printer PULTOL":
          inputKodeSubkategori.value = "13-32";
          break;
        case "Monitor, Keyboard, Mouse, Printer KSPT dan CST":
          inputKodeSubkategori.value = "13-33";
          break;
        case "	Monitor, Keyboard, Mouse dan Printer Kabang	":
          inputKodeSubkategori.value = "13-34";
          break;
        case "	Monitor, Keyboard, Mouse CCTV":
          inputKodeSubkategori.value = "13-35";
          break;
        case "	Monitor, Keyboard, Mouse, CSD dan CSR Docking":
          inputKodeSubkategori.value = "13-36";
          break;
        case "PCS":
          inputKodeSubkategori.value = "13-37";
          break;
        case "PCDS":
          inputKodeSubkategori.value = "13-38";
          break;
        case "PCCS":
          inputKodeSubkategori.value = "13-39";
          break;
        case "Kabinet Magazine":
          inputKodeSubkategori.value = "13-40";
          break;
        case "KVM":
          inputKodeSubkategori.value = "13-41";
          break;
        case "UTP Hub":
          inputKodeSubkategori.value = "13-42";
          break;
        case "FO Hub	":
          inputKodeSubkategori.value = "13-43";
          break;
        case "Rak":
          inputKodeSubkategori.value = "13-44";
          break;
        case "Rak server":
          inputKodeSubkategori.value = "13-45";
          break;
        case "	Server MIS":
          inputKodeSubkategori.value = "13-46";
          break;
        case "Server Card Management	":
          inputKodeSubkategori.value = "13-47";
          break;
        case "CCTV Server Ops":
          inputKodeSubkategori.value = "13-48";
          break;
        case "Terimal Managemen Card	":
          inputKodeSubkategori.value = "13-49";
          break;
        case "Terminal MIS":
          inputKodeSubkategori.value = "13-50";
          break;
        case "Peralatan Jaringan ":
          inputKodeSubkategori.value = "13-51";
          break;
        case "Terminal Docking ":
          inputKodeSubkategori.value = "13-52";
          break;
        case "	NAS":
          inputKodeSubkategori.value = "13-53";
          break;
        case "PDB & Kelistrikan ":
          inputKodeSubkategori.value = "13-54";
          break;
        case "	LTS ( include)	":
          inputKodeSubkategori.value = "13-55";
          break;
        case "Remote Multi Golongan":
          inputKodeSubkategori.value = "13-56";
          break;
        case "UPS + Stabilizer":
          inputKodeSubkategori.value = "13-57";
          break;
        case "Console Server R Ops	":
          inputKodeSubkategori.value = "13-58";
          break;
        case "Mesin TCT":
          inputKodeSubkategori.value = "13-59";
          break;
        case "Lane Terminal & Switch (Termasuk Power Supply)":
          inputKodeSubkategori.value = "13-60";
          break;
        case "Kabel Fiber Optik 96 Core":
          inputKodeSubkategori.value = "13-61";
          break;
        case "Display VMS":
          inputKodeSubkategori.value = "13-62";
          break;
        case "Mini PC VMS":
          inputKodeSubkategori.value = "13-63";
          break;
        case "Terminal VMS 1":
          inputKodeSubkategori.value = "13-64";
          break;
        case "Terminal VMS 2":
          inputKodeSubkategori.value = "13-65";
          break;
        case "UPS 1":
          inputKodeSubkategori.value = "13-66";
          break;
        case "UPS 2":
          inputKodeSubkategori.value = "13-67";
          break;
        case "Server 1 VMS	":
          inputKodeSubkategori.value = "13-68";
          break;
        case "Server 2 VMS	":
          inputKodeSubkategori.value = "13-69";
          break;
        case "Terminal CCTV 1 + NVR/Server":
          inputKodeSubkategori.value = "13-70";
          break;
        case "Terminal CCTV 2 + NVR/Server":
          inputKodeSubkategori.value = "13-71";
          break;
        case "Tower":
          inputKodeSubkategori.value = "13-73";
          break;
        case "Radio RIG":
          inputKodeSubkategori.value = "13-74";
          break;
        case "Radio HT":
          inputKodeSubkategori.value = "13-75";
          break;
        case "Repeater":
          inputKodeSubkategori.value = "13-76";
          break;
        case "Radio Mobile":
          inputKodeSubkategori.value = "13-77";
          break;
        case "CCTV PTZ":
          inputKodeSubkategori.value = "13-78";
          break;
        case "CCTV FIX":
          inputKodeSubkategori.value = "13-79";
          break;
        case "Patok KM":
          inputKodeSubkategori.value = "14-01";
          break;
        case "Concreate Barrier":
          inputKodeSubkategori.value = "14-02";
          break;
        case "Guardrail":
          inputKodeSubkategori.value = "14-03";
          break;
        case "PJU":
          inputKodeSubkategori.value = "14-04";
          break;
        case "Delineator":
          inputKodeSubkategori.value = "14-05";
          break;
        case "Panjang ":
          inputKodeSubkategori.value = "15-01";
          break;
        case "Lebar ROW ":
          inputKodeSubkategori.value = "15-02";
          break;
        case "Konstruksi Mainroad Galian/TimbunanBahan Bangunan":
          inputKodeSubkategori.value = "15-03";
          break;
        case "Jembatan sungai ":
          inputKodeSubkategori.value = "16-01";
          break;
        case "Underpass":
          inputKodeSubkategori.value = "16-02";
          break;
        case "Overpass":
          inputKodeSubkategori.value = "16-03";
          break;
        case "Jembatan Panyeberangan Orang ":
          inputKodeSubkategori.value = "16-04";
          break;
        case "	Gerbang Tol":
          inputKodeSubkategori.value = "16-05";
          break;
        case "	Simpangan Susun ":
          inputKodeSubkategori.value = "16-06";
          break;
        case "Mebel":
          inputKodeSubkategori.value = "17-01";
          break;
        case "Elektronik":
          inputKodeSubkategori.value = "17-02";
          break;
        default:
          break;
      }
    };

    selectNamaRuas.addEventListener("change", handleRuasChange);
    selectNamaGerbang.addEventListener("change", handleGerbangChange);
    selectNamaKategori.addEventListener("change", handleKategoriChange);
    selectNamaSubkategori.addEventListener("change", handleSubkategoriChange);
    return () => {
      selectNamaRuas.removeEventListener("change", handleRuasChange);
      selectNamaGerbang.removeEventListener("change", handleGerbangChange);
      selectNamaKategori.removeEventListener("change", handleKategoriChange);
      selectNamaSubkategori.removeEventListener("change", handleSubkategoriChange);
    };
  }, []);

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Tambah Kodefikasi</h2>
          <form>
            <div className="form__group">
              <div>
                <label htmlFor="nama_ruas">Nama Ruas</label>
                <select id="nama_ruas">
                <option value="Bakter">Bakter</option>
                  <option value="Terpeka">Terpeka</option>
                  <option value="Palindra">Palindra</option>
                  <option value="Permai">Permai</option>
                  <option value="Pekbang">Pekbang</option>
                  <option value="Mebi">Mebi</option>
                  <option value="Binbat">Binbat</option>
                  <option value="Sibanceh">Sibanceh</option>
                  <option value="JORR-S">JORR-S</option>
                  <option value="ATP">ATP</option>
                  <option value="Bengtab">Bengtab</option>
                </select>
              </div>
                <div>
                  <label htmlFor="kode_ruas">Kode Ruas</label>
                <input type="text" id="kode_ruas" placeholder="" />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label htmlFor="nama_gerbang">Nama Gerbang</label>
                <select id="nama_gerbang">
                <option value="GT Terbanggi Besar">GT Terbanggi Besar</option>
                  <option value="GT Gunung sugih">GT Gunung sugih</option>
                  <option value="GT Tegineneng">GT Tegineneng</option>
                  <option value="GT Natar">GT Natar</option>
                  <option value="GT Kotabaru">GT Kotabaru</option>
                  <option value="GT Lematang">GT Lematang</option>
                  <option value="GT Sidomulyo">GT Sidomulyo</option>
                  <option value="GT Kalianda">GT Kalianda</option>
                  <option value="GT Kayu Agung">GT Kayu Agung</option>
                  <option value="GT Simpang Pematang">GT Simpang Pematang</option>
                  <option value="GT Way Kenanga">GT Way Kenanga</option>
                  <option value="GT Lambu Kibang">GT Lambu Kibang</option>
                  <option value="GT Menggala">GT Menggala</option>
                  <option value="GT Terbanggi Besar-5">GT Terbanggi Besar-5</option>
                  <option value="GT Palembang">GT Palembang</option>
                  <option value="GT Pemulutan">GT Pemulutan</option>
                  <option value="GT KTM Rambutan">GT KTM Rambutan</option>
                  <option value="GT Indralaya">GT Indralaya</option>
                  <option value="GT Dumai">GT Dumai</option>
                  <option value="GT Bathin Solapan">GT Bathin Solapan</option>
                  <option value="GT Pinggir">GT Pinggir</option>
                  <option value="GT Kandis Utara">GT Kandis Utara</option>
                  <option value="GT Kandis Selatan">GT Kandis Selatan</option>
                  <option value="GT Minas">GT Minas</option>
                  <option value="GT Pekanbaru">GT Pekanbaru</option>
                  <option value="GT Bangkinang">GT Bangkinang</option>
                  <option value="GT Binjai">GT Binjai</option>
                  <option value="GT Semayang">GT Semayang</option>
                  <option value="GT Helvetia">GT Helvetia</option>
                  <option value="GT Marelan 1">GT Marelan 1</option>
                  <option value="GT Marelan 2">GT Marelan 2</option>
                  <option value="GT Stabat">GT Stabat</option>
                  <option value="GT Baitussalam">GT Baitussalam</option>
                  <option value="GT Kuta Baro">GT Kuta Baro</option>
                  <option value="GT Blang Bintang">GT Blang Bintang</option>
                  <option value="GT Indaraputri">GT Indaraputri</option>
                  <option value="GT Jantho">GT Jantho</option>
                  <option value="GT Seulimeum">GT Seulimeum</option>
                  <option value="GT Padang Tiji">GT Padang Tiji</option>
                  <option value="GT Ciputat 1">GT Ciputat 1</option>
                  <option value="GT Pd Pinang 1 ">GT Pd Pinang 1 </option>
                  <option value="GT Fatmawati 1">GT Fatmawati 1</option>
                  <option value="GT Ampera 1">GT Ampera 1</option>
                  <option value="GT Lt Agung 3">GT Lt Agung 3</option>
                  <option value="GT Dukuh 1">GT Dukuh 1</option>
                  <option value="GT Dukuh 3">GT Dukuh 3</option>
                  <option value="GT Gedong 1">GT Gedong 1</option>
                  <option value="GT Lt Agung 1">GT Lt Agung 1</option>
                  <option value="GT Ampera 2">GT Ampera 2</option>
                  <option value="GT Fatmawati 2">GT Fatmawati 2</option>
                  <option value="GT Lt Agung 2">GT Lt Agung 2</option>
                  <option value="GT Gedong 2">GT Gedong 2</option>
                  <option value="GT Kp. Rambutan">GT Kp. Rambutan</option>
                  <option value="GT Pasar Rebo">GT Pasar Rebo</option>
                  <option value="GT Koja Direct">GT Koja Direct</option>
                  <option value="GT Koja Timur">GT Koja Timur</option>
                  <option value="GT Koja Barat">GT Koja Barat</option>
                  <option value="GT Kebon Bawang">GT Kebon Bawang</option>
                  <option value="GT Semper 2">GT Semper 2</option>
                  <option value="GT Semper 1">GT Semper 1</option>
                  <option value="STA 0+000">STA 0+000</option>
                  <option value="STA 01+050">STA 01+050</option>
                  <option value="STA 0+000">STA 0+000</option>
                  <option value="STA 16+725">STA 16+725</option>
                </select>
              </div>

              <div>
                <label htmlFor="kode_gerbang">Kode Gerbang</label>
                <input type="text" id="kode_gerbang" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="nama_kategori">Nama Kategori</label>
                <select id="nama_kategori">
                <option value="Alat Bantu & Pemeliharaan Konstruksi">Alat Bantu & Pemeliharaan Konstruksi</option>
                  <option value="Kendaraan">Kendaraan</option>
                  <option value="Sarana Elektronik">Sarana Elektronik</option>
                  <option value="Kelengkapan">Kelengkapan</option>
                  <option value="Jalan utama dan Jalan akses">Jalan utama dan Jalan akses</option>
                  <option value="Struktur jalan utama">Struktur jalan utama</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>
              <div>
                <label htmlFor="kode_kategori">Kode Kategori</label>
                <input type="text" id="kode_kategori" placeholder="" />
              </div>
            </div>

            <div className="form__group">
          <div>
            <label htmlFor="nama_subkategori">Nama Subkategori</label>
            <select id="nama_subkategori">
            <option value=" Genset "> Genset </option>
                  <option value="Kendaraan yang dipinjamkan ke PJR">Kendaraan yang dipinjamkan ke PJR</option>
                  <option value="TCT Programable Keyboard">TCT Programable Keyboard</option>
                  <option value="TCT Monitor LED">TCT Monitor LED</option>
                  <option value="TCT FO Konverter  ">TCT FO Konverter  </option>
                  <option value="CST">CST</option>
                  <option value="VCD">VCD</option>
                  <option value="OBS">OBS</option>
                  <option value="LTS">LTS</option>
                  <option value="LVD Card Detector">LVD Card Detector</option>
                  <option value="ALB">ALB</option>
                  <option value="CDP">CDP</option>
                  <option value="CCTV Transaksi + tiang">CCTV Transaksi + tiang</option>
                  <option value="GTO Enttrance Multi Incl CCTV Gandar + Tiang  ">GTO Enttrance Multi Incl CCTV Gandar + Tiang  </option>
                  <option value="ASD">ASD</option>
                  <option value=" LLA "> LLA </option>
                  <option value="AVC">AVC</option>
                  <option value="Peralatan Multi Golongan ">Peralatan Multi Golongan </option>
                  <option value="Printer Kiosk ">Printer Kiosk </option>
                  <option value="LPR">LPR</option>
                  <option value="PID">PID</option>
                  <option value="CSR">CSR</option>
                  <option value="CDP">CDP</option>
                  <option value="FO Converter Transaksi">FO Converter Transaksi</option>
                  <option value="Camera + Tiang braket CCTV Transaksi  ">Camera + Tiang braket CCTV Transaksi  </option>
                  <option value="Kamera CCTV dalam gardu ">Kamera CCTV dalam gardu </option>
                  <option value="Smartbooth single">Smartbooth single</option>
                  <option value="FO Ethernet Card Converter">FO Ethernet Card Converter</option>
                  <option value="CST">CST</option>
                  <option value="Printer Kartu ">Printer Kartu </option>
                  <option value="Smartbooth Multi ">Smartbooth Multi </option>
                  <option value="UPS">UPS</option>
                  <option value="PDB">PDB</option>
                  <option value="Monitor, Keyboard, Mouse dan Printer PULTOL">Monitor, Keyboard, Mouse dan Printer PULTOL</option>
                  <option value="Monitor, Keyboard, Mouse, Printer KSPT dan CST">Monitor, Keyboard, Mouse, Printer KSPT dan CST</option>
                  <option value="Monitor, Keyboard, Mouse dan Printer Kabang ">Monitor, Keyboard, Mouse dan Printer Kabang </option>
                  <option value="Monitor, Keyboard, Mouse CCTV">Monitor, Keyboard, Mouse CCTV</option>
                  <option value="Monitor, Keyboard, Mouse, CSD dan CSR Docking">Monitor, Keyboard, Mouse, CSD dan CSR Docking</option>
                  <option value="PCS">PCS</option>
                  <option value="PCDS">PCDS</option>
                  <option value="PCCS">PCCS</option>
                  <option value="Kabinet Magazine">Kabinet Magazine</option>
                  <option value="KVM">KVM</option>
                  <option value="UTP Hub">UTP Hub</option>
                  <option value="FO Hub  ">FO Hub  </option>
                  <option value="Rak">Rak</option>
                  <option value="Rak server">Rak server</option>
                  <option value="Server MIS">Server MIS</option>
                  <option value="Server Card Management  ">Server Card Management  </option>
                  <option value="CCTV Server Ops">CCTV Server Ops</option>
                  <option value="Terimal Managemen Card  ">Terimal Managemen Card  </option>
                  <option value="Terminal MIS">Terminal MIS</option>
                  <option value="Peralatan Jaringan ">Peralatan Jaringan </option>
                  <option value="Terminal Docking ">Terminal Docking </option>
                  <option value=" NAS"> NAS</option>
                  <option value="PDB & Kelistrikan ">PDB & Kelistrikan </option>
                  <option value="LTS ( include)  ">LTS ( include)  </option>
                  <option value="Remote Multi Golongan">Remote Multi Golongan</option>
                  <option value="UPS + Stabilizer">UPS + Stabilizer</option>
                  <option value="Console Server R Ops  ">Console Server R Ops  </option>
                  <option value="Mesin TCT">Mesin TCT</option>
                  <option value="Lane Terminal & Switch (Termasuk Power Supply)">Lane Terminal & Switch (Termasuk Power Supply)</option>
                  <option value="Kabel Fiber Optik 96 Core">Kabel Fiber Optik 96 Core</option>
                  <option value="Display VMS">Display VMS</option>
                  <option value="Mini PC VMS">Mini PC VMS</option>
                  <option value="Terminal VMS 1">Terminal VMS 1</option>
                  <option value="Terminal VMS 2">Terminal VMS 2</option>
                  <option value="UPS 1">UPS 1</option>
                  <option value="UPS 2">UPS 2</option>
                  <option value="Server 1 VMS  ">Server 1 VMS  </option>
                  <option value="Server 2 VMS  ">Server 2 VMS  </option>
                  <option value="Terminal CCTV 1 + NVR/Server">Terminal CCTV 1 + NVR/Server</option>
                  <option value="Terminal CCTV 2 + NVR/Server">Terminal CCTV 2 + NVR/Server</option>
                  <option value="Jaringan & Kelistrikan CCTV   ">Jaringan & Kelistrikan CCTV   </option>
                  <option value="Tower">Tower</option>
                  <option value="Radio RIG">Radio RIG</option>
                  <option value="Radio HT">Radio HT</option>
                  <option value="Repeater">Repeater</option>
                  <option value="Radio Mobile">Radio Mobile</option>
                  <option value="CCTV PTZ">CCTV PTZ</option>
                  <option value="CCTV FIX">CCTV FIX</option>
                  <option value="Patok KM">Patok KM</option>
                  <option value="Concreate Barrier">Concreate Barrier</option>
                  <option value="Guardrail">Guardrail</option>
                  <option value="PJU">PJU</option>
                  <option value="Delineator">Delineator</option>
                  <option value="Panjang">Panjang</option>
                  <option value="Lebar ROW ">Lebar ROW </option>
                  <option value="Konstruksi Mainroad Galian/TimbunanBahan Bangunan">Konstruksi Mainroad Galian/TimbunanBahan Bangunan</option>
                  <option value="Jembatan sungai ">Jembatan sungai </option>
                  <option value="Underpass">Underpass</option>
                  <option value="Overpass">Overpass</option>
                  <option value="Jembatan Panyeberangan Orang ">Jembatan Panyeberangan Orang </option>
                  <option value="Gerbang Tol">Gerbang Tol</option>
                  <option value="Simpangan Susun ">Simpangan Susun </option>
                  <option value="Mebel">Mebel</option>
                  <option value="Elektronik">Elektronik</option>
            </select>
          </div>

          <div>
            <label htmlFor="kode_subkategori">Kode Subkategori</label>
            <input type="text" id="kode_subkategori" placeholder="" />
          </div>
        </div>

            <div className="form__group">
              <div>
                <label htmlFor="id_subkategori">ID Subkategori</label>
                <input type="text" id="id_subkategori" placeholder="" />
              </div>
              <div>
                <label htmlFor="id_gerbang">ID Gerbang</label>
                <input type="text" id="id_gerbang" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="id_kodefikasi">ID Kodefikasi</label>
                <input type="text" id="id_kodefikasi" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <button className="update__btn">SIMPAN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tambahkodefikasi;
