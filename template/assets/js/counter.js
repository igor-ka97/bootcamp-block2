
$( document ).ready(function() {
    $('.counter__item').on('click', countInput);
    function countInput() {
        $input = $(this).closest('.car__quantity').find('.counter__input');
        if ($(this).hasClass("counter__item-plus")) {
            $input.val(parseInt($input.val()) + 1);
        } else if ($(this).hasClass("counter__item-minus")) {
            if (parseInt($input.val()) > 1) {
                $input.val(parseInt($input.val()) - 1);
            }
        }
    }
});