import test from "node:test";
import assert from "node:assert";
import { caseStudiesData } from "../src/data/caseStudies.ts";
import { featuredProjects } from "../src/data/projects.ts";
import { skillsCatalog } from "../src/data/skillsExplorer.ts";
import { studioProfile } from "../src/data/profile.ts";
import { SUGGESTED_QUESTIONS, KNOWLEDGE_TOPICS } from "../src/data/assistantKnowledge.ts";
import { freelanceServices, engagementPolicies } from "../src/data/services.ts";

test("Cross-Referenced Project Identifiers Integrity", () => {
  const caseStudyIds = new Set(caseStudiesData.map((p) => p.id));
  const featuredProjectIds = new Set(featuredProjects.map((p) => p.id));

  // Verify that all featured projects match case studies
  for (const id of featuredProjectIds) {
    assert.ok(
      caseStudyIds.has(id),
      `Featured project ID "${id}" must exist in caseStudiesData`
    );
  }

  // Verify all skills associatedProjectIds reference existing projects
  for (const skill of skillsCatalog) {
    for (const projId of skill.associatedProjectIds) {
      assert.ok(
        caseStudyIds.has(projId),
        `Skill "${skill.id}" references non-existent project "${projId}"`
      );
    }
  }
});

test("Contact Form Validation Logic", () => {
  const validateForm = (name: string, email: string, message: string) => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your name.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!emailRegex.test(email.trim())) {
      errs.email = "Please provide a valid email format.";
    }

    if (!message.trim()) {
      errs.message = "Please write a brief message.";
    } else if (message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters.";
    }

    return {
      isValid: Object.keys(errs).length === 0,
      errors: errs,
    };
  };

  // Test empty inputs
  const emptyRes = validateForm("", "", "");
  assert.strictEqual(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.name);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.message);

  // Test invalid email
  const badEmailRes = validateForm("Jane Doe", "invalid-email-address", "We need a backend developer.");
  assert.strictEqual(badEmailRes.isValid, false);
  assert.ok(badEmailRes.errors.email);
  assert.strictEqual(badEmailRes.errors.name, undefined);

  // Test message too short
  const shortMsgRes = validateForm("Jane Doe", "jane@company.com", "Hi");
  assert.strictEqual(shortMsgRes.isValid, false);
  assert.ok(shortMsgRes.errors.message);

  // Test valid submission
  const validRes = validateForm(
    "Jane Doe",
    "jane@company.com",
    "We have a high-throughput backend project and would like to collaborate."
  );
  assert.strictEqual(validRes.isValid, true);
  assert.strictEqual(Object.keys(validRes.errors).length, 0);
});

test("Truthfulness & Academic Verification Data", () => {
  // Confirm DTU graduation year is strictly 2026 (Final Year)
  assert.strictEqual(studioProfile.graduatingYear, "2026");
  assert.ok(studioProfile.institution.includes("Delhi Technological University"));
  assert.ok(studioProfile.degree.includes("B.Tech Final Year"));

  // Confirm email and external profiles are defined
  assert.ok(studioProfile.links.email.includes("@"));
  assert.ok(studioProfile.links.github.startsWith("http"));
  assert.ok(studioProfile.links.linkedin.startsWith("http"));
  assert.ok(studioProfile.links.upwork.startsWith("http"));
});

test("Assistant Knowledge Base Coverage", () => {
  // Verify suggested questions count
  assert.strictEqual(SUGGESTED_QUESTIONS.length, 5);

  // Verify knowledge topics have non-empty answers and keywords
  for (const topic of KNOWLEDGE_TOPICS) {
    assert.ok(topic.keywords.length > 0, `Topic ${topic.id} must have keywords`);
    assert.ok(topic.answer.length > 30, `Topic ${topic.id} must have substantial answer`);
  }
});

test("Freelance Services & Engagement Models Integrity", () => {
  assert.strictEqual(freelanceServices.length, 3, "Must have 3 core freelance services");
  assert.strictEqual(engagementPolicies.length, 3, "Must have 3 core client policies");

  for (const s of freelanceServices) {
    assert.ok(s.id.length > 0, "Service must have an id");
    assert.ok(s.title.length > 0, "Service must have a title");
    assert.ok(s.deliverables.length >= 3, `Service ${s.id} must have at least 3 deliverables`);
    assert.ok(s.idealFor.length > 20, `Service ${s.id} must define who it is ideal for`);
    assert.ok(s.contractModel.includes("Upwork"), `Service ${s.id} must reference Upwork Escrow`);
  }

  for (const p of engagementPolicies) {
    assert.ok(p.title.length > 0, "Policy must have a title");
    assert.ok(p.description.length > 20, "Policy must have a detailed description");
  }
});
