import React, { useState, Fragment } from "react";

const Survey = () => {

  const [company, setCompany] = useState("");
  const [company_location, setLocation] = useState("");
  const [job_position, setPosition] = useState("");
  const [job_level, setLevel] = useState("");
  const [years_of_experience, setExpTotal] = useState("");
  const [years_at_company, setExpCompany] = useState("");
  const [montly_salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("");
  const [bonus, setBonus] = useState("");
  const [frequency, setFreq] = useState("");
  const [gender, setGender] = useState("");

  const onSubmitForm = async (e) => {
    try {
      const body = { company, company_location, job_position, job_level,
        years_of_experience, years_at_company, montly_salary, currency, bonus,
        frequency, gender};
        await fetch("http://localhost:5000/add_salary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    window.location = "/add_salary";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitForm}>
        <input name="company"
          type="text"
          placeholder="Company"
          value={company}
          onChange={e => setCompany(e.target.value)}
        >
        </input>
        <br />
        <select name="company_location"
          value={company_location}
          onChange={e => setLocation(e.target.value)}
          required
        >
          <option value="" disabled defaultValue hidden>Company Location</option>
          <option value="colombia">Colombia</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="latam">Latin America (other than Colombia)</option>
          <option value="olatam">Outside Latin America</option>
        </select>
        <br />
        <select name="job_position"
          value={job_position}
          onChange={e => setPosition(e.target.value)}
          required
        >
          <option value="" disabled defaultValue hidden>Job Position</option>
          <option value="software_engineer">Software Engineer</option>
          <option value="machine_learning">Machine Learning</option>
          <option value="security">Security</option>
          <option value="full_stack">Full Stack</option>
          <option value="api">API</option>
          <option value="data">Data</option>
          <option value="web_development">Web Development</option>
          <option value="qa">QA</option>
          <option value="devops">DevOps</option>
          <option value="site_reliability">Site_Reliability</option>
          <option value="distributed_systems">Distributed Systems</option>
        </select>
        <select name="job_level"
          value={job_level}
          onChange={e => setLevel(e.target.value)}
          required
        >
          <option value="" disabled defaultValue hidden>Job Level</option>
          <option value="intern">Intern</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
          <option value="leader">Leader</option>
          <option value="management_roll">Management Roll</option>
        </select>
        <br />
        <input name="years_of_experience"
          type="text"
          placeholder="Years of Experience"
          value={years_of_experience}
          onChange={e => setExpTotal(e.target.value)}
        >
        </input>
        <input name="years_at_company"
          type="text"
          placeholder="Years at Company"
          value={years_at_company}
          onChange={e => setExpCompany(e.target.value)}
        >
        </input>
        <br />
        <input name="montly_salary"
          type="text"
          placeholder="Montly Salary"
          value={montly_salary}
          onChange={e => setSalary(e.target.value)}
        >
        </input>
        <select name="currency"
          value={currency}
          onChange={e => setCurrency(e.target.value)}
          required
        >
          <option value="" disabled defaultValue hidden>Currency</option>
          <option value="cop">CoP</option>
          <option value="usd">U$D</option>
          <option value="euro">Euro</option>
          <option value="brazilian_real">Brazilian Real</option>
          <option value="chilean_peso">Chilean Peso</option>
          <option value="argentina_peso">Argentina Peso</option>
        </select>
        <br />
        <input name="bonus"
          type="text"
          placeholder="Bonus"
          value={bonus}
          onChange={e => setBonus(e.target.value)}
        >
        </input>
        <select name="frecuency"
          value={frequency}
          onChange={e => setFreq(e.target.value)}
          required
        >
          <option value="" disabled defaultValue hidden>Frecuency</option>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>
        <br />
        <select name="gender"
          value={gender}
          onChange={e => setGender(e.target.value)}
          required
        >
          <option value="" disabled defaultValue hidden>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>


        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>
    </Fragment>
  )
};

export default Survey;
