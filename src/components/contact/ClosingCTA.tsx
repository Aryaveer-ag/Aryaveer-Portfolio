import React from "react";
import {
  Container,
  PageSection,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Button,
} from "@/components/common";
import { studioProfile } from "@/data/profile";

export function ClosingCTA() {
  return (
    <PageSection id="contact" spacing="spacious" divided className="bg-grid-pattern relative">
      <Container size="lg">
        <SectionHeading
          eyebrow="04 // GET IN TOUCH"
          title="Let's Build Something Reliable."
          description="Whether you need a high-performance backend API, a scalable machine learning pipeline, or a dedicated software engineer for your freelance project, I'm open to discussing opportunities."
          action={
            <Badge variant="emerald" dot pulse size="sm">
              Open to Opportunities
            </Badge>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Inquiry Card */}
          <div className="lg:col-span-7">
            <Card variant="default" className="h-full flex flex-col justify-between border-[var(--border-default)] bg-[var(--bg-surface-1)]">
              <div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-xs text-[var(--accent-emerald)] uppercase tracking-wider font-semibold">
                      DIRECT ENGAGEMENT
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    Start a Freelance or Contract Inquiry
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    I take on contract engineering work with a commitment to clean architecture, thorough testing, and prompt communication. Engagements can be structured directly or securely through Upwork escrow.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent-cyan)]">✓</span>
                      <span>Backend architecture &amp; RESTful API design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent-cyan)]">✓</span>
                      <span>Machine learning inference pipelines &amp; embeddings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent-cyan)]">✓</span>
                      <span>Performance profiling &amp; database query optimization</span>
                    </div>
                  </div>
                </CardContent>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href={studioProfile.links.upwork}
                  isExternal
                >
                  Hire on Upwork
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={`mailto:${studioProfile.links.email}`}
                >
                  Email Me Directly
                </Button>
              </div>
            </Card>
          </div>

          {/* Quick Contact & Verification Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <Card variant="subtle" className="flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase text-[var(--text-muted)] tracking-wider mb-2">
                  VERIFIED CHANNELS
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="text-[var(--text-muted)] text-[10px]">EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${studioProfile.links.email}`}
                      className="text-[var(--text-primary)] hover:text-white transition-colors"
                    >
                      {studioProfile.links.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[10px]">UPWORK PROFILE</div>
                    <a
                      href={studioProfile.links.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent-cyan)] hover:underline"
                    >
                      upwork.com/freelancers/aryaveer
                    </a>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[10px]">GITHUB REPOSITORY</div>
                    <a
                      href={studioProfile.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent-cyan)] hover:underline"
                    >
                      github.com/aryaveer
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>Location</span>
                <span className="text-[var(--text-primary)]">{studioProfile.location}</span>
              </div>
            </Card>

            <Card variant="subtle" className="py-4 px-5">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[var(--text-muted)]">STUDIO STATUS</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACCEPTING NEW CONTRACTS
                </span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

