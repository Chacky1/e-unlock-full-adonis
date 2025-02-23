import AppLayout from "~/layouts/app";

const Legal = () => {
  return (
    <AppLayout>
      <section id="legal" className="flex flex-col gap-16 py-16 px-8 lg:px-32">
        <h1>Mentions légales</h1>
        <div>
          <p>Adresse : Unlocktoncomputer, 19 rue Salluste, 67200 Strasbourg</p>
          <p>Email : unlocktoncomputer@gmail.com</p>
          <p>Siret : 893 741 371 00015</p>
          <p>Code APE : 6202A – N° TVA intracommunautaire : FR 80893741371</p>
          <p>Dirigeant : M. Alban THAUMUR</p>
        </div>
      </section>
    </AppLayout>
  );
};

export default Legal
