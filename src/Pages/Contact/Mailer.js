import React from 'react';
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast';

const Mailer = () => {
    const handleSendMail = e => {
        e.preventDefault();
        emailjs.sendForm('service_kjvervy', 'template_7bzyx1q', e.target, 't3J5PCkrtk1pVuUSq')
            .then(result => {
                toast.success('Mail Sent', { id: 'sendSuccess' });
            })
            .catch(error => {
                toast.error('Please Try again', { id: 'sendFailed' });
            });
    }
    return (
        <div class="hero bg-base-200 py-12 lg:px-6 mt-8">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold">Get in Touch</h1>
                </div>
                <div class="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSendMail}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name='user_name' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name='user_email' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea type="text" name='user_message' class="input input-bordered h-20" />
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-accent">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Mailer;