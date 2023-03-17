import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    profession: ''
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, profession } = user;
    const res = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        profession
      })
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert('Invalid registration');
      console.log('Invalid registration');
    } else {
      window.alert('Valid registration');
      console.log('Successful registration');
      navigate('/');
    }
  };

  return (
    <>
      <section className='signup' style={{backgroundColor:'#1ac9cd'}}>
        <div className='container mt-3' style={{backgroundColor:'#1ac9cd'}}>
          <div className='signup-content'>
            <div className='signup-form' >

              <h2 className='form-title'>signup
                <p> <i class="zmdi zmdi-sign-in"></i></p>



              </h2>
              <form method='POST' className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account"></i>

                  </label>
                  <input type="text" name='name' id='name' autoComplete='off'
                  value={user.name}
                  onChange={handleInputs}
                   placeholder='your name' />

                </div>
                <div className='form-group'>
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>


                  </label>
                  <input type="email" name='email' id='email' autoComplete='off' 
                  value={user.email}
                  onChange={handleInputs}
                  placeholder='your email ' />

                </div>
                <div className='form-group'>
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>


                  </label>
                  <input type="number" name='phone' id='phone' autoComplete='off'
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder='your number ' />

                </div>
                <div className='form-group'>
                  <label htmlFor="profesion">
                    <i class="zmdi zmdi-graduation-cap"></i>


                  </label>
                  <input type="text" name='profession' id='profession' autoComplete='off'
                  value={user.profession}
                  onChange={handleInputs}
                  placeholder='your profession ' />
                  </div>

                  <div className='form-group form-button'>
                  <Link to='/Login'>
                    <input type='submit' name='signup' className='form-submit' value='Login'  onClick={PostData}/>
                  </Link>
                  </div>

              </form>


            </div>

          </div>

        </div>

      </section>




    </>
  )
}

export default Signup
