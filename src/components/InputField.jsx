const InputField = ({
    label, 
    type="text", 
    id, 
    placeholder,
    value, 
    onChange,
    required=false,
  }) =>{
  return(
    <div className="mb-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>

      <input 
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;