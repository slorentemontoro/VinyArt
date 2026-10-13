const themeToggle = document.querySelector("#theme-toggle");
const savedThemeKey = "vinyart-theme";

let savedTheme = null;

try {
	savedTheme = localStorage.getItem(savedThemeKey);
} catch (error) {
	console.error("No se pudo recuperar el tema guardado.", error);
}

if (savedTheme === "dark") {
	document.documentElement.dataset.theme = "dark";
	themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
	const theme = themeToggle.checked ? "dark" : "light";
	document.documentElement.dataset.theme = theme;

	try {
		localStorage.setItem(savedThemeKey, theme);
	} catch (error) {
		console.error("No se pudo guardar la preferencia de tema.", error);
	}
});
