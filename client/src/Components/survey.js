import React, { useState, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Survey = () => {

    const [company, setCompany] = useState("");
    const [company_location, setLocation] = useState("");
    const [title, setPosition] = useState("");
    const [level, setLevel] = useState("");
    const [total_xp, setExpTotal] = useState("");
    const [at_company_xp, setExpCompany] = useState("");
    const [salary, setSalary] = useState("");
    const [currency, setCurrency] = useState("");
    const [bonus, setBonus] = useState("");
    const [gender, setGender] = useState("");
    const [validated, setValidated] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {
                company, company_location, title, level,
                total_xp, at_company_xp, salary, currency, bonus,
                gender
            };
            await fetch("http://localhost:5000/add_salary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    // const handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    //   setValidated(true);
    // };

    return (
        <Fragment>
            <Form
                onSubmit={onSubmitForm}
                style={{ width: 450, margin: "auto" }}
                className="mt-5"
                noValidate
                validated={validated}
            >
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
                                required
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                                name="title"
                                value={title}
                                onChange={e => setPosition(e.target.value)}
                            >
                                <option value="" disabled defaultValue hidden>Select...</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Security">Security</option>
                                <option value="Full Stack">Full Stack</option>
                                <option value="API">API</option>
                                <option value="Data">Data</option>
                                <option value="Web Development">Web Development</option>
                                <option value="QA">QA</option>
                                <option value="DevOps">DevOps</option>
                                <option value="Site Reliabilit">Site Reliability</option>
                                <option value="Distributed Systems">Distributed Systems</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <FloatingLabel
                            label="Job Level"
                            className="mb-3"
                        >
                            <Form.Select
                                name="level"
                                value={level}
                                onChange={e => setLevel(e.target.value)}
                            >
                                <option value="" disabled defaultValue hidden>Select...</option>
                                <option value="L0">Intern</option>
                                <option value="L1">Junior</option>
                                <option value="L2">Mid</option>
                                <option value="L3">Senior</option>
                                <option value="L4">Leader</option>
                                <option value="L5">Management Roll</option>
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
                                name="total_xp"
                                type="text"
                                placeholder="Years of Experience"
                                value={total_xp}
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
                                name="at_company_xp"
                                type="text"
                                placeholder="Years at Company"
                                value={at_company_xp}
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
                                name="salary"
                                type="text"
                                placeholder="Monthly Salary"
                                value={salary}
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
                                <option value="COP">COP</option>
                                <option value="USD">USD</option>
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
                            <option value="non_binary">Non binary</option>
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
