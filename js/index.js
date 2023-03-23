/** @format */
const form = document.getElementById("bmi-form");
form.addEventListener("submit", (event) => {
	// agar tidak terjadi reload saat button submit di klik
	event.preventDefault();

	// mendapatkan nilai input
	const beratBadan = document.getElementById("berat-badan").value;
	const tinggiBadan = document.getElementById("tinggi-badan").value;

	// untuk validasi input
	if (
		isNaN(tinggiBadan) ||
		isNaN(beratBadan) ||
		tinggiBadan <= 0 ||
		beratBadan <= 0
	) {
		alert("silahkan masukkan berat badan dan tinggi yang benar");
		return;
	}

	// rumus BMI
	const tinggiBadanMeter = tinggiBadan / 100;
	const BMI = beratBadan / (tinggiBadanMeter * tinggiBadanMeter);

	// untuk mengatur jumlah angka dibelakang koma
	const roundedBmi = BMI.toFixed(2);

	// logika untuk menampilkan hasil dari perhitungan BMI
	let category;
	const body = document.getElementById("body");
	if (roundedBmi < 18.5) {
		category = "Kekurangan Berat Badan";
		body.innerHTML = `
		<p>BMI anda kurang dari 18.5</p>
		<p>Anda berada dalam ketegori ${category}</p>
		<p>Berikut adalah beberapa penyakit atau masalah kesehatan yang dapat disebabkan oleh ${category} berdasarkan BMI:</p>
		<p>Gangguan Pencernaan</p>
		<p>Infeksi</p>
		<p>Anemia</p>
		<p>Osteoporosis</p>
		<p>Masalah Kardiovaskular</p>
		<p>Dll</p>
		`;
	} else if (roundedBmi >= 18.5 && roundedBmi < 25) {
		category = "Normal (ideal)";
		body.innerHTML = `
		<p>BMI anda berada antara 18.5-24.9</p>
		<p>Anda berada dalam ketegori ${category}</p>
		`;
	} else if (roundedBmi >= 25.0 && roundedBmi < 30) {
		category = "Kelebihan Berat Badan";
		body.innerHTML = `
		<p>BMI anda berada antara 25.0-29.9</p>
		<p>Anda berada dalam ketegori ${category}</p>
		<p>Berikut adalah beberapa penyakit atau masalah kesehatan yang dapat disebabkan oleh ${category} berdasarkan BMI:</p>
		<p>Penyakit Jantung dan Pembuluh Darah</p>
		<p>Diabetes</p>
		<p>Sleep Apnea</p>
		<p>Kanker</p>
		<p>Masalah Pernapasan</p>
		<p>Dll</p>
		`;
	} else if (roundedBmi >= 30) {
		category = "Kegemukan (Obesitas)";
		body.innerHTML = `
		<p>BMI anda lebih dari 30.0</p>
		<p>Anda berada dalam ketegori ${category}</p>
		<p>Berikut adalah beberapa penyakit atau masalah kesehatan yang dapat disebabkan oleh ${category} berdasarkan BMI:</p>
		<p>Penyakit Jantung dan Pembuluh Darah</p>
		<p>Diabetes</p>
		<p>Sleep Apnea</p>
		<p>Kanker</p>
		<p>Masalah Pernapasan</p>
		<p>Dll</p>
		`;
	}

	// menampilkan hasil
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = `
    <p>BMI anda adalah ${roundedBmi}</p>
    <p>${category}</p>`;
});

// untuk melakukan reset
const title = document.getElementById("title");
const body = document.getElementById("body");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
	result.innerHTML = "00.00";
	title.innerHTML = "Keterangan";
	body.innerHTML = "";
});
