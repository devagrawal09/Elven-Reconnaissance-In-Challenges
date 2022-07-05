(function () {
  let hidden = true;

  const onShownButtonText = $('#eric-full-power-toggle .on-shown');
  const onHiddenButtonText = $('#eric-full-power-toggle .on-hidden');

  const fullPower = $('#full-power');

  onShownButtonText.hide();

  $('#eric-full-power-toggle').click(function () {
    if (hidden) {
      onShownButtonText.show();
      onHiddenButtonText.hide();
      fullPower.collapse('show');
      hidden = false;
    } else {
      onShownButtonText.hide();
      onHiddenButtonText.show();
      fullPower.collapse('hide');
      hidden = true;
    }
  });
})();
