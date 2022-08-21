import React, {useState, useRef} from 'react';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

const Form = {
  Initial:'Initial',
  Loading: 'Loading',
  Success: 'Success',
  Error: 'Error'
}

function Newsletter() {
  const [form, setForm] = useState({ state: Form.Initial });
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`
    });
  };

  return (
    <section id="subscribe">
      <div className="mx-auto">

          {/* CTA box */}
          <div className="relative px-3 md:px-4">

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="text-lg text-gray-200 mb-2 mb-6 font-medium">Subscribe to our newsletter</h3>
                {/* CTA form */}
                <form className="w-full lg:w-auto mb-2" onSubmit={subscribe}>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input 
                      ref={inputEl}
                      type="email" 
                      className="form-input w-full appearance-none bg-white border border-gray-300 focus:border-gray-600 rounded-sm px-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-gray-500 placeholder-gray-500" 
                      placeholder="Your email…" 
                      aria-label="Email for newsletter"
                      autoComplete="email"
                      required
                      />
                    <button 
                      className="btn text-white bg-brand-500 hover:bg-brand-600 shadow w-48 rounded flex justify-center items-center" 
                      type="submit"
                    >
                        {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  {/*<p className="text-sm text-gray-400 mt-3">7 days free trial. No credit card required.</p>*/}
                </form>
                {form.state === Form.Error ? (
                  <ErrorMessage>{form.message}</ErrorMessage>
                ) : form.state === Form.Success ? (
                  <SuccessMessage>{form.message}</SuccessMessage>
                ) : (
                  <span></span>
                )}
              </div>

            </div>

          </div>

      </div>
    </section>
  );
}

export default Newsletter;
