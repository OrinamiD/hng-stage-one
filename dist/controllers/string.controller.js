import {} from "express";
import { deleteByValue, getAllStringsService, parseNaturalLanguageQuery, stringToAnalyze, } from "../services/strings.service.js";
import StringModel from "../models/string.model.js";
import axios from "axios";
// Create and analyze strings
export const analyzeString = async (req, res) => {
    try {
        const { value } = req.body;
        const properties = await stringToAnalyze(value);
        const existing = await StringModel.findOne({
            "properties.sha256_hash": properties.sha256_hash,
        });
        if (existing) {
            return res
                .status(409)
                .json({ error: "String already exists in the system" });
        }
        const newData = await StringModel.create({
            value,
            id: properties.sha256_hash,
            properties,
        });
        return res.status(201).json({
            id: newData.id,
            value: newData.value,
            properties: newData.properties,
            created_at: new Date(),
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
// get specific string
export const getAStringValue = async (req, res) => {
    try {
        const { value } = req.params; // ✅ Extract from URL
        if (typeof value !== "string" || !value.trim()) {
            return res
                .status(422)
                .json({ error: "value must be a non-empty string" });
        }
        const existing = await StringModel.findOne({ value });
        if (!existing) {
            return res
                .status(404)
                .json({ error: "String does not exist in the system" });
        }
        return res.status(200).json({
            id: existing.id,
            value: existing.value,
            properties: existing,
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//get all string with filtering
export const getAllStrings = async (req, res) => {
    try {
        const filters = req.query;
        if (!filters) {
            return res
                .status(400)
                .json({ error: "Invalid query parameter values or types" });
        }
        const result = await getAllStringsService(filters);
        res.status(200).json(result);
    }
    catch (error) {
        console.error("Error fetching strings:", error);
        res.status(400).json({ error: "Invalid query parameter values or types" });
    }
};
//This Natural Language Filtering endpoint
export const filterByNaturalLanguage = async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) {
            return res
                .status(400)
                .json({ error: "Unable to parse natural language query" });
        }
        // Step 1: Parse natural language into filters
        const { parsedFilters, original } = parseNaturalLanguageQuery(query);
        // Step 2: Query the DB using the parsed filters
        const result = await getAllStringsService(parsedFilters);
        if (!result) {
            return res
                .status(422)
                .json({ error: "Query parsed but resulted in conflicting filters" });
        }
        // Step 3: Return structured response
        return res.status(200).json({
            data: result.data,
            count: result.count,
            interpreted_query: {
                original,
                parsed_filters: parsedFilters,
            },
        });
    }
    catch (error) {
        console.error("Natural language filter error:", error.message);
        if (error.message.includes("Unable to parse natural language query")) {
            return res
                .status(400)
                .json({ error: "Unable to parse natural language query" });
        }
        return res
            .status(422)
            .json({ error: "Query parsed but resulted in conflicting filters" });
    }
};
// Delete String
export const deleteString = async (req, res) => {
    try {
        const { value } = req.params;
        const results = await deleteByValue(value);
        if (!results)
            return res.status(404).json({ error: "String does not exist" });
        return res.status(204).send(); // ✅ empty response
    }
    catch (err) {
        return res.status(500).json({ error: err.message || "Server error" });
    }
};
export const userDetails = {
    name: "Dongo Cornelius",
    email: "dongoorinami@gmail.com",
    stack: "Node.js/Express",
};
export const fetchUser = async (req, res) => {
    try {
        let catFact = "Could not fetch a cat fact";
        const response = await axios.get("https://catfact.ninja/fact", {
            timeout: 5000,
        });
        if (!response) {
            return res
                .status(400)
                .json({ success: false, messsage: "Incorrect URL" });
        }
        catFact = response.data.fact;
        console.log(catFact);
        return res.status(200).json({
            status: "success",
            user: {
                email: userDetails.email,
                name: userDetails.name,
                stack: userDetails.stack,
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        });
    }
    catch (error) {
        if (error.message === "Could not fetch a cat fact") {
            return res.status(400).json({ success: false, message: error.message });
        }
        else {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};
//# sourceMappingURL=string.controller.js.map