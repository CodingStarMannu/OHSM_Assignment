
import styles from './InputField.module.css';

const InputField = (props) => {
  const { label, type, placeholder, onChange, value, name } = props;

  return (
    <>
      <div className={styles.label}>{label}</div>
      <div className={styles.container}>
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          onChange={onChange} 
          value={value} 
          name={name} 
        />
      </div>
    </>
  );
};

export default InputField;
