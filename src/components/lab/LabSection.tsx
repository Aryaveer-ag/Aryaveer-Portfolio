"use client";

import React, { useState } from "react";
import { Container, PageSection, SectionHeading, Badge } from "@/components/common";
import { FlashSaleEngineSim } from "./FlashSaleEngineSim";
import { RateLimiterSim } from "./RateLimiterSim";
import { CacheEvictionSim } from "./CacheEvictionSim";
import { ArchitectureExplorer } from "@/components/architecture/ArchitectureExplorer";

export function LabSection() {
  const [activeSimulation, setActiveSimulation] = useState<
    "flash-sale" | "architecture" | "rate-limiter" | "cache-eviction"
  >("flash-sale");

  return (
    <PageSection id="lab" spacing="spacious" divided>
      <Container size="lg">
        <SectionHeading
          eyebrow="03 // IN-BROWSER SIMULATIONS"
          title="The Engineering Lab"
          description="Interactive, browser-based systems and algorithmic simulations running entirely in pure TypeScript with zero external server latency. Observe atomic concurrency controls, system architecture topologies, and cache eviction tradeoffs."
          action={
            <Badge variant="emerald" dot pulse size="sm">
              4 Technical Modules Active
            </Badge>
          }
        />

        {/* Simulation Selector Tab Bar */}
        <div className="flex border-b border-[var(--border-subtle)] mb-8 font-mono text-xs overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveSimulation("flash-sale")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 shrink-0 focus-visible:outline-none ${
              activeSimulation === "flash-sale"
                ? "border-[var(--accent-emerald)] text-[var(--accent-emerald)]"
                : "border-transparent text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            <span>01 // FEATURED</span>
            <span>Flash Sale Simulator</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSimulation("architecture")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 shrink-0 focus-visible:outline-none ${
              activeSimulation === "architecture"
                ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
                : "border-transparent text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            <span>02 // ARCHITECTURE</span>
            <span>System Topology Explorer</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSimulation("rate-limiter")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 shrink-0 focus-visible:outline-none ${
              activeSimulation === "rate-limiter"
                ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
                : "border-transparent text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            <span>03 //</span>
            <span>Distributed Rate Limiter</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSimulation("cache-eviction")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 shrink-0 focus-visible:outline-none ${
              activeSimulation === "cache-eviction"
                ? "border-[var(--accent-indigo)] text-[var(--accent-indigo)]"
                : "border-transparent text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            <span>04 //</span>
            <span>Cache Eviction (LRU/LFU)</span>
          </button>
        </div>

        {/* Active View */}
        {activeSimulation === "flash-sale" ? (
          <FlashSaleEngineSim />
        ) : activeSimulation === "architecture" ? (
          <ArchitectureExplorer />
        ) : activeSimulation === "rate-limiter" ? (
          <RateLimiterSim />
        ) : (
          <CacheEvictionSim />
        )}
      </Container>
    </PageSection>
  );
}
