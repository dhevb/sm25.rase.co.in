import React from "react";

interface ContactInfo {
  name: string;
  title: string;
  organization: string;
  address: string;
  title1: string;
  organization1: string;
  address1: string;
  emails: string[];
  phones: string[];
  websites: string[];
}

const contactData: ContactInfo = {
  name: "",
  title: "Event Management Cell",
  organization: "Department of Holistic Education,",
  address: "\nPlot No. 1, Sector 71, SAS Nagar (Mohali) – 160071",
  title1: "JNU",
  organization1: "Jawaharlal Nehru University",
  address1: "\nNew Delhi, 110067",
  emails: ["rase@jnu.ac.in", "info@rase.co.in"],
  phones: ["7903431900"],
  websites: ["https://raseconferences.com","https://shikshamahakumbh.com", "https://dhe.org.in"],
};

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold text-primary text-center">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <p className="text-primary text-lg mt-4 mr-5">
          <b>{contactData.title}</b>
          <br />
          {contactData.organization}
          <br />
          {contactData.address}
        </p>
        <div className="inline-block h-auto w-0.5 self-stretch bg-primary dark:bg-primary"></div>
        <p className="text-primary text-lg mt-4 ml-5">
          <b>{contactData.title1}</b>
          <br />
          {contactData.organization1}
          <br />
          {contactData.address1}
        </p>
      </div>
      <div className="text-primary text-lg mt-4">
        <div>
          Email:&nbsp;&nbsp;
          {contactData.emails.map((email, index) => (
            <span key={index}>
              <a href={`mailto:${email}`} className="text-primary font-bold">
                {email}
              </a>
              {index < contactData.emails.length - 1 && " | "}
            </span>
          ))}
        </div>
        <div className="mt-4">
          Mobile/WhatsApp:&nbsp;&nbsp;
          {contactData.phones.map((phone, index) => (
            <span key={index}>
              <a href={`tel: ${phone}`} className="text-primary font-bold">
                {phone}
              </a>
              {index < contactData.phones.length - 1 && " | "}
            </span>
          ))}
        </div>
        <div className="mt-4">
          Website:&nbsp;&nbsp;
          {contactData.websites.map((website, index) => (
            <span key={index}>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold"
              >
                {website}
              </a>
              {index < contactData.websites.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
