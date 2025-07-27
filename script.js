document.addEventListener("DOMContentLoaded", function () {
  const elements = document.getElementsByName("submit_btn");

  if (elements.length > 0) {
    elements[0].addEventListener("click", () => {
      const firstName = document.getElementsByName("first_name")[0]?.value || "";
      const lastName = document.getElementsByName("last_name")[0]?.value || "";
      const phone = document.getElementsByName("phone_no")[0]?.value || "";
      const emailId = document.getElementsByName("email")[0]?.value || "";

      const str = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${emailId}`;
      
      alert(str);
    });
  }
});
