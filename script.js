    console.log("Lets write JavaScript");
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

        toggleBtn.addEventListener("click", () => {
            const currentTheme = body.getAttribute("data-theme");
    if (currentTheme === "light") {
        body.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️ Light";
            } else {
        body.setAttribute("data-theme", "light");
    toggleBtn.textContent = "🌙 Dark";
            }
        });