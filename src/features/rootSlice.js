import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paket: "",
  warna1: "Navy",
  warna2: "Navy",
  ukuran1: 27,
  ukuran2: 27,
  nama: "",
  whatsapp: "",
  alamat: "",
  provinsi: "",
  kabupaten: "",
  kecamatan: "",
  kurir: "J&T",
  payment: "COD",
  status: "Unverified",
};

const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    setPaketR: (state, action) => {
      return { ...state, paket: action.payload };
    },
    setWarna1: (state, action) => {
      return { ...state, warna1: action.payload };
    },
    setWarna2: (state, action) => {
      return { ...state, warna2: action.payload };
    },
    setUkuran1: (state, action) => {
      return { ...state, ukuran1: action.payload };
    },
    setUkuran2: (state, action) => {
      return { ...state, ukuran2: action.payload };
    },
    setNama: (state, action) => {
      return { ...state, nama: action.payload };
    },
    setWhatsappR: (state, action) => {
      return { ...state, whatsapp: action.payload };
    },
    setAlamatR: (state, action) => {
      return { ...state, alamat: action.payload };
    },
    setProvinsiR: (state, action) => {
      return { ...state, provinsi: action.payload };
    },
    setKabupatenR: (state, action) => {
      return { ...state, kabupaten: action.payload };
    },
    setKecamatanR: (state, action) => {
      return { ...state, kecamatan: action.payload };
    },
    setKurirR: (state, action) => {
      return { ...state, kurir: action.payload };
    },
    setPayment: (state, action) => {
      return { ...state, payment: action.payload };
    },
  },
});

export const {
  setPaketR,
  setWarna1,
  setWarna2,
  setUkuran1,
  setUkuran2,
  setNama,
  setWhatsappR,
  setAlamatR,
  setProvinsiR,
  setKabupatenR,
  setKecamatanR,
  setKurirR,
  setPayment,
} = rootSlice.actions;
export default rootSlice.reducer;
