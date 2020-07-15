import classNames from 'classnames';
import { h } from 'preact';
import styles from '../CardInput.module.scss';
import BrandIcon from './BrandIcon';
import Field from '../../../../../components/internal/FormFields/Field';
import useCoreContext from '../../../../../core/Context/useCoreContext';

interface CardNumberProps {
    brand: string;
    error: boolean;
    filled: boolean;
    focused: boolean;
    isValid: boolean;
    label: string;
    onFocusField: (fieldName: string) => void;
    showBrandIcon: boolean;
}

const CardNumber = ({ error = false, isValid = false, onFocusField = () => {}, ...props }: CardNumberProps) => {
    const { i18n } = useCoreContext();

    return (
        <Field
            label={props.label}
            focused={props.focused}
            filled={props.filled}
            classNameModifiers={['cardNumber']}
            onFocusField={() => onFocusField('encryptedCardNumber')}
            errorMessage={error && i18n.get('creditCard.numberField.invalid')}
            isValid={isValid}
        >
            <span
                data-cse="encryptedCardNumber"
                className={classNames({
                    'adyen-checkout__input': true,
                    'adyen-checkout__input--large': true,
                    'adyen-checkout__card__cardNumber__input': true,
                    [styles['adyen-checkout__input']]: true,
                    'adyen-checkout__input--error': error,
                    'adyen-checkout__input--focus': props.focused,
                    'adyen-checkout__input--valid': isValid,
                    'adyen-checkout__card__cardNumber__input--noBrand': !props.showBrandIcon
                })}
            >
                {props.showBrandIcon && <BrandIcon brand={props.brand} />}
            </span>
        </Field>
    );
};

export default CardNumber;
