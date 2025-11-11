import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useReactTable } from "@tanstack/react-table";

function TestDataTable() {
    // const table = useReactTable({})
    return(
        <Table className="w-full border-collapse">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-white">Test 1</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="w-[150px]">EnglishName</TableCell>
                    <TableCell className="w-[150px]">r2</TableCell>
                    <TableCell>r3</TableCell>
                    <TableCell>r1</TableCell>
                    <TableCell>r2</TableCell>
                    <TableCell>r3</TableCell>
                    <TableCell>r1</TableCell>
                    <TableCell>r2</TableCell>
                    <TableCell>r3</TableCell>
                    <TableCell>r1</TableCell>
                    <TableCell>r3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>EnglishName</TableCell>
                    <TableCell>r2</TableCell>
                    <TableCell>r3</TableCell>
                    <TableCell>r1</TableCell>
                    <TableCell>r2</TableCell>
                    <TableCell>r3</TableCell>
                    <TableCell>r1</TableCell>
                    <TableCell>r2</TableCell>
                    <TableCell>r3</TableCell>
                    <TableCell>r1</TableCell>
                    <TableCell>r2</TableCell>
                    <TableCell>r3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

export default TestDataTable;