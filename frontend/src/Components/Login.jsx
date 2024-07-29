
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

const Login = () => {
  const handleSubmit = (values) => {
    console.log('Dados do formulário:', values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-80 max-w-md p-8 bg-custom-black shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white-700">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 text-black bg-white border border-gray-300 rounded mt-1"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 mt-1 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-white-700">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white text-black p-2 border border-gray-300 rounded mt-1"
                />
                <ErrorMessage name="password" component="div" className="text-red-600 mt-1 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-white-700">Password Confirmation</label>
                <Field
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  className="w-full p-2 border text-black border-gray-300 rounded bg-white mt-1"
                />
                <ErrorMessage name="password" component="div" className="text-red-600 mt-1 text-sm" />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
