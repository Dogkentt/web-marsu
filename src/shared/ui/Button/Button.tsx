import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button 
            className={cn(styles["button"])}
        >
            { children }
        </button>
    );
}
export default Button;