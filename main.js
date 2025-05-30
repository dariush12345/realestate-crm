
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("root").innerHTML = `
    <div style="max-width:500px; margin:auto;">
      <h2>فرم افزودن مشتری</h2>
      <form id="customerForm">
        <div>
          <label>نام:</label><br/>
          <input name="name" required />
        </div>
        <div>
          <label>شماره تماس:</label><br/>
          <input name="phone" required />
        </div>
        <div>
          <label>یادداشت:</label><br/>
          <textarea name="notes"></textarea>
        </div>
        <button type="submit">ثبت</button>
      </form>
      <div id="output" style="margin-top:2rem;"></div>
    </div>
  `;

  const form = document.getElementById("customerForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const notes = data.get("notes");

    output.innerHTML = `
      <h3>✅ اطلاعات ثبت شد:</h3>
      <p><strong>نام:</strong> ${name}</p>
      <p><strong>شماره:</strong> ${phone}</p>
      <p><strong>یادداشت:</strong> ${notes}</p>
    `;
    form.reset();
  });
});
