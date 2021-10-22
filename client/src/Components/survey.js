import React, { useState, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Survey = () => {

  const [company, setCompany] = useState("");
  const [company_location, setLocation] = useState("");
  const [job_position, setPosition] = useState("");
  const [job_level, setLevel] = useState("");
  const [years_of_experience, setExpTotal] = useState("");
  const [years_at_company, setExpCompany] = useState("");
  const [monthly_salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("");
  const [bonus, setBonus] = useState("");
  const [gender, setGender] = useState("");

  const onSubmitForm = async (e) => {
    try {
      const body = { company, company_location, job_position, job_level,
        years_of_experience, years_at_company, monthly_salary, currency, bonus,
        gender};
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
      <Form onSubmit={onSubmitForm} style={{ width: 450, margin: "auto" }} className="mt-5">
        <Row className="mb-3">
          <Form.Group as={Col}>
            <FloatingLabel
              label="Company"
              className="mb-3"
            >
              <Form.Control
                name="company"
                type="text"
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel
              label="Company Location"
              className="mb-3"
            >
              <Form.Select
                name="company_location"
                value={company_location}
                onChange={e => setLocation(e.target.value)}
                >
                <option value="" disabled defaultValue hidden>Select...</option>
                <option value="colombia">Colombia</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="latam">Latin America (other than Colombia)</option>
                <option value="olatam">Outside Latin America</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <FloatingLabel
              label="Job Position"
              className="mb-3"
            >
              <Form.Select
                name="job_position"
                value={job_position}
                onChange={e => setPosition(e.target.value)}
              >
                <option value="" disabled defaultValue hidden>Select...</option>
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
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel
              label="Job Level"
              className="mb-3"
            >
              <Form.Select
                name="job_level"
                value={job_level}
                onChange={e => setLevel(e.target.value)}
              >
                <option value="" disabled defaultValue hidden>Select...</option>
                <option value="intern">Intern</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
                <option value="leader">Leader</option>
                <option value="management_roll">Management Roll</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <FloatingLabel
              label="Years of Experience"
              className="mb-3"
            >
              <Form.Control
                name="years_of_experience"
                type="text"
                placeholder="Years of Experience"
                value={years_of_experience}
                onChange={e => setExpTotal(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel
              label="Years at Company"
              className="mb-3"
            >
              <Form.Control
                name="years_at_company"
                type="text"
                placeholder="Years at Company"
                value={years_at_company}
                onChange={e => setExpCompany(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <FloatingLabel
              label="Monthly Salary"
              className="mb-3"
            >
              <Form.Control
                name="monthly_salary"
                type="text"
                placeholder="Monthly Salary"
                value={monthly_salary}
                onChange={e => setSalary(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel
              label="Bonus"
              className="mb-3"
            >
              <Form.Control
                name="bonus"
                type="text"
                placeholder="Bonus"
                value={bonus}
                onChange={e => setBonus(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel
              label="Currency"
              className="mb-3"
            >
              <Form.Select
                name="currency"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
              >
                <option value="" disabled defaultValue hidden>Select...</option>
                <option value="cop">CoP</option>
                <option value="usd">U$D</option>
                <option value="euro">Euro</option>
                <option value="brazilian_real">Brazilian Real</option>
                <option value="chilean_peso">Chilean Peso</option>
                <option value="argentina_peso">Argentina Peso</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group>
          <FloatingLabel
            label="Gender"
            className="mb-3"
          >
            <Form.Select
              name="currency"
              value={gender}
              onChange={e => setGender(e.target.value)}
            >
              <option value="" disabled defaultValue hidden>Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </Fragment>
  )
};

export default Survey;
