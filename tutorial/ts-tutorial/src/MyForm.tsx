import React,{useState, useRef} from 'react'

interface MyFormProps {
  onSubmit : (form : {name : string; description: string})=>void;
}

function MyForm ({onSubmit} : MyFormProps) {
  //useRef를 사용할 땐 generics 타입을 정한다. null체킹도 해줘야한다
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name : '',
    description : ''
  });

  const {name, description} = form;

  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name] : value
    });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name:'',
      description:''
    });
    if(!inputRef.current){
      return ;
    }
    inputRef.current.focus();
    console.log(inputRef)
  };


  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name="name"
        value={name}
        onChange={onChange}
        />
        <input type="text"
        name="description"
        value={description}
        onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
    </>
  );

}
export default MyForm;