import { useState } from 'react'
import cn from 'classnames'
import styles from './ContactField.module.sass'
import Icon from '../icon/Icon'
import Script from 'next/script'

declare interface ContactProps {
  className: string
  placeholder?: string
}

const ACTION = 'https://andyedge.us1.list-manage.com/subscribe/post?u=be177a5c81f1b242ee4865dfa&amp;id=a22dd548c0&amp;f_id=00b874e2f0'

const ContactField = ({ className, placeholder }: ContactProps) => {
  const [email, setEmail] = useState('');
  return (
    <form
      className={cn(styles.form, className)}
      action={ACTION}
      method='post'
      id='mc-embedded-subscribe-form'
      name='mc-embedded-subscribe-form'
      target='_blank'
      noValidate
    >
      <div id='mc-field-group'>
        <input
          className={styles.input}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='EMAIL'
          placeholder={placeholder || ''}
          required
        />
        <button
          className={styles.btn}
          name='subscribe'
          id='mc-embedded-subscribe'
          type='submit'
        >
          <Icon name='arrow-right' size={14} />
        </button>
      </div>
      <div id='mce-responses' className={styles.response}>
        <div className='response' id='mce-error-response' style={{ display: 'none' }}></div>
        <div className='response' id='mce-success-response' style={{ display: 'none' }}></div>
      </div>
      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
        <input type='text' name='b_be177a5c81f1b242ee4865dfa_a22dd548c0' tabIndex={-1} defaultValue='' />
      </div>
      <Script
        src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
        strategy='afterInteractive'
      />
      <Script
        id='mailchimp-handler'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';fnames[4]='MMERGE4';ftypes[4]='text';
        `,
        }}
      />
    </form>
  );
};

export default ContactField;
