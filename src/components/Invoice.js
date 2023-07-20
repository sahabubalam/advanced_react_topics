import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const Invoice = ({ invoiceData }) => {
  const styles = StyleSheet.create({
    heading: {
      fontSize: 24,
      fontWeight: "bold",
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
    },
    value: {
      fontSize: 16,
    },
    invoiceContainer: {
      padding: 10,
      margin: 10,
    },
    headersection: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    tableHeader: {
      fontSize: 12,
      fontWeight: "bold",
      padding: 8,
      borderWidth: 1,
      borderColor: "#000",
    },
    tableRow: {
      flexDirection: "row",
      paddingLeft: 10,
      marginLeft: 10,
      paddingRight: 10,
      marginRight: 10,
    },
    tableCell: {
      fontSize: 10,
      padding: 10,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#000",
      borderTopWidth: 0,
    },
  });
  return (
    <Document>
      {[1, 2, 3].map((item) => (
        <Page>
          <View fixed>
            <View style={styles.headersection}>
              <View style={styles.invoiceContainer}>
                <Text style={styles.heading}>Invoice</Text>
                <Text style={styles.label}>Invoice Number: 1234</Text>
                <Text style={styles.label}>Date: 12-02-2023</Text>
                <Text style={styles.label}>Customer Name: sahabub</Text>
                {/* Add more components for the invoice items */}
              </View>
              <View style={styles.invoiceContainer}>
                <Text style={styles.heading}>Invoice</Text>
                <Text style={styles.label}>Invoice Number: 1234</Text>
                <Text style={styles.label}>Date: 12-02-2023</Text>
                <Text style={styles.label}>Customer Name: sahabub</Text>
                {/* Add more components for the invoice items */}
              </View>
            </View>
            <View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableHeader,
                    { width: "16.66%", border: "none", visibility: "hidden" },
                  ]}
                ></Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn2
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn3
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn4
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn5
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn6
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    { width: "16.66%", border: "none" },
                  ]}
                ></Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  111111
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  11111
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  111111
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  111111
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  11111
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  Column
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn7
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn8
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn9
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn10
                </Text>
                <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                  coulmn11
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2222
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2222
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2222
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2222
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2222
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2222
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={[styles.tableRow, { marginTop: "20" }]}>
              <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                ssss
              </Text>
              <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                coulmn2
              </Text>
              <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                coulmn3
              </Text>
              <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                coulmn4
              </Text>
              <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                coulmn5
              </Text>
              <Text style={[styles.tableHeader, { width: "16.66%" }]}>
                coulmn6
              </Text>
            </View>

            {[1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15].map((row, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                 2323
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2323
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                2323
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                 2342
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  2312
                </Text>
                <Text style={[styles.tableCell, { width: "16.66%" }]}>
                  3454
                </Text>
              </View>
            ))}
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default Invoice;
