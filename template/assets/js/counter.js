
$( document ).ready(function() {
    $('.counter__item').click(countInput);
    $('.counter__input').change(changeInput);

    function countInput() {
        $input = $(this).closest('.car__quantity').find('.counter__input');
        $action = $(this).data('count');
        if ($action == 'plus') {
            $input.val(parseInt($input.val()) + 1);
        } else if ($action == 'minus') {
            if (parseInt($input.val()) > 1) {
                $input.val(parseInt($input.val()) - 1);
            }
        }
    }
    function changeInput() {
        $input = $(this).closest('.car__quantity').find('.counter__input');
        $inputValue = $input.val();
        if (parseInt($inputValue) < 1 || $inputValue == '') {
            $input.val(1);
        }
    }
});