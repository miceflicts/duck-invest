"use client";

import { useBondData } from "../hooks/useBondData";
import { useBondFilter } from "../hooks/useBondFilter";
import { useSorting } from "../hooks/useSorting";
import { BondFilters } from "./BondFilters";
import { TableHeader } from "./TableHeader";
import { BondTableRow } from "./BondTableRow";
import { EmptyState } from "./EmptyState";
import { TableFooter } from "./TableFooter";

export function TreasuryBondsTable({ data }) {
  const bonds = useBondData(data);
  const { filteredBonds, filterType, setFilterType } = useBondFilter(bonds);
  const { sortedBonds, sortConfig, requestSort } = useSorting(filteredBonds);

  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
      <BondFilters
        filterType={filterType}
        setFilterType={setFilterType}
        totalBonds={sortedBonds?.length || 0}
      />
      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader sortConfig={sortConfig} onSort={requestSort} />
          <tbody className="divide-y divide-border text-sm">
            {sortedBonds && sortedBonds.length > 0 ? (
              sortedBonds.map((bond, index) => (
                <BondTableRow key={`${bond.name}-${index}`} bond={bond} />
              ))
            ) : (
              <EmptyState />
            )}
          </tbody>
        </table>
      </div>
      <TableFooter />
    </div>
  );
}
