import classNames from 'classnames';
import style from './style.module.scss'


export default function Button({
  children,
  light = false,
  ...restProps
}) {
  const { className, href, ...props } = restProps;
  const classes = classNames([
    style.button,
    className
  ]);

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}