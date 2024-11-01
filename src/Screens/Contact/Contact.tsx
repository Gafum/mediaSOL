function Contact(): JSX.Element {
   return (
      <div>
         <h2>Unsere Kontaktinformationen</h2>
         <p>Wir freuen uns, von Ihnen zu hören! Bitte kontaktieren Sie uns über die untenstehenden Informationen oder das Formular.</p>

         <div className="Contact__info">
            <p><strong>Adresse:</strong> Hauptstraße 123, 46535 HaupStadt, Deutschland</p>
            <p><strong>Telefon:</strong> +49 000 0000000</p>
            <p><strong>E-Mail:</strong> kontakt@mediasol.de</p>
            <p><strong>Öffnungszeiten:</strong> Montag - Freitag, 9:00 - 18:00 Uhr</p>
         </div>
      </div>
   );
}

export default Contact;