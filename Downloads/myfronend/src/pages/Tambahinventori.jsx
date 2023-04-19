import React, { useEffect } from "react";
import "../styles/tambahinventori.css";

const Tambahinventori = () => {
  useEffect(() => {
    const selectNamaGerbang = document.getElementById("nama_gerbang");
    const inputKodeGerbang = document.getElementById("kode_gerbang");
    const inputLokasiGerbang = document.getElementById("lokasi_gerbang");

    selectNamaGerbang.addEventListener("change", (event) => {
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
        
      }
    });
  }, []);

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Tambah Inventori</h2>
          <form>
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
                <label htmlFor="merk_asset">Merk Asset</label>
                <input type="text" id="merk_asset" placeholder="" />
              </div>

              <div>
                <label htmlFor="lokasi_gerbang">Lokasi Gerbang ( latitude, longtitude )</label>
                <input type="text" id="lokasi_gerbang" placeholder="Latitude, Longtitude" />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label htmlFor="tanggal_terima">Tanggal Terima</label>
                <input type="text" id="tanggal_terima" placeholder="" />
              </div>
              <div>
                <label htmlFor="harga_perolehan">Harga Perolehan</label>
                <input type="text" id="harga_perolehan" placeholder="" />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label htmlFor="batas_pemakaian">Batas Pemakaian</label>
                <input type="text" id="batas_pemakaian" placeholder="" />
              </div>
              <div>
                <label htmlFor="masa_manfaat">Masa Manfaat</label>
                <input type="text" id="masa_manfaat" placeholder="" />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label htmlFor="waktu_penyusutan">Waktu Penyusutan</label>
                <input type="text" id="waktu_penyusutan" placeholder="" />
              </div>
              <div>
                <label htmlFor="kondisi_asset">Kondisi Asset</label>
                <input type="text" id="kondisi_asset" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="id_kodefikasi">ID Kodefikasi</label>
                <input type="text" id="id_kodefikasi" placeholder="" />
              </div>
              <div>
                <label htmlFor="id_inventori">ID Inventori</label>
                <input type="text" id="id_inventori" placeholder="" />
              </div>
            </div>
             <div>
                <label>Foto Asset</label>
                <p className="profile-img__desc">
                  Upload di sini.
                </p>
                <input type="file" placeholder="choose file" />
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

export default Tambahinventori;
