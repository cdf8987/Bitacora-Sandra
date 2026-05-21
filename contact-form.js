document.querySelectorAll(".email-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      name ? `Nombre: ${name}` : "",
      email ? `Email: ${email}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = new URL("mailto:labitacoradesandra@gmail.com");
    mailto.searchParams.set("subject", "Consulta desde la web");
    mailto.searchParams.set("body", body);

    window.location.href = mailto.toString();
  });
});
