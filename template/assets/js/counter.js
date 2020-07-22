$( document ).ready(function() {
    $('.counter__item').click(countInput);
    $('.counter__input').change(changeInput);

    function countInput() {
        $input = $(this).closest('.car__quantity').find('.counter__input');
        $action = $(this).data('count');
        $inputValue = parseInt($input.val().replace(/[^\d]/g, ''));
        if (!(isNaN($inputValue))) {
            if ($action == 'plus') {
                $input.val(parseInt($input.val()) + 1);
            } else if ($action == 'minus') {
                if (parseInt($input.val()) > 1) {
                    $input.val(parseInt($input.val()) - 1);
                }
            }
        } else $input.val(1);
    }
    function changeInput() {
        $input = $(this).closest('.car__quantity').find('.counter__input');
        $inputValue = parseInt($input.val().replace(/[^\d]/g, ''));
        if(!(isNaN($inputValue)) && $inputValue != 0) {
            $input.val($inputValue);
        } else {
            $input.val(1);
        }
    }
});