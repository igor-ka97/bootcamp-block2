
$('.counter__item-plus').on('click', countPlus);
$('.counter__item-minus').on('click', countMinus);
function countPlus() {
    $input = $(this).closest('.car__quantity').find('.counter__input');
    $input.val(parseInt($input.val()) + 1);
}
function countMinus() {
    $input = $(this).closest('.car__quantity').find('.counter__input');
    if (parseInt($input.val()) > 1) {
        $input.val(parseInt($input.val()) - 1);
    }
}