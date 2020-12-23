require("select2");
require("jquery.scrollbar");
require("bootstrap-datepicker");
import InputMask from "inputmask";

$(function () {
  /* Only Number */
  $("body").on("input", ".only-number", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });

  /* Input Mask */
  $(document).ready(function () {
    const imask = new InputMask("\\9\\94 99 999 99 99");
    imask.mask("[data-mask]");
  });

  $(".datepicker").datepicker({
    autoclose: true,
    format: "dd-mm-yyyy",
  });

  $(".select2").select2();

  $(".scrollbar-macosx").scrollbar();
});
