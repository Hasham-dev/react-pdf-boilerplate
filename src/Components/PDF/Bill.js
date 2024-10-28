import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    color: "#333",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 0,
    fontWeight: "bold",
    padding: "20px",
    border: "2px solid",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    textDecoration: "underline",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 12,
  },
  column: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 10,
    marginBottom: 2,
    fontWeight: "bold",
  },
  fieldContent: {
    borderBottom: "1px solid #000",
    paddingBottom: 2,
    marginBottom: 8,
  },
  boxed: {
    border: "1px solid #000",
    padding: 8,
    marginBottom: 10,
  },
  boxFlex: {
    display: "flex",
    height: "100%",
  },
  boxedSectionOne: {
    border: "1px solid #000",
    width: "75%",
    padding: 8,
  },
  boxedSectionOne2: {
    border: "1px solid #000",
    borderLeft: "0px",
    width: "25%",
    padding: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
  },
  boxedSectionOne2: {
    border: "1px solid #000",
    borderLeft: "0px",
    width: "25%",
    padding: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
  },
  boxedTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  signature: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 10,
  },
  table: {
    display: "flex",
    // width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 0,
    flexDirection: "column",
    borderColor: "#333",
    // marginBottom: 20,
  },
  tableRow: {
    // flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,

    // paddingTop: 5,
    // paddingBottom: 5,
    display: "flex",
    width: "100%",
    // borderColor: "#333",
  },
  tableColHeader: {
    // width: "25%",
    border: "1px solid #000",
    borderTop: "none",
    borderBottom: "none",
    backgroundColor: "#e0e0e0",
    // padding: 5,
    fontWeight: "bold",
  },
  tableCol: {
    // width: "25%",
    border: "1px solid #000",
    borderTop: "none",
    borderBottom: "none",
    backgroundColor: "#f2f2f2",
    // padding: 5,
    fontWeight: "bold",
  },
  tableHeader: {
    // flexDirection: "row",
    // backgroundColor: "#cccccc",
    borderBottomWidth: 1,
    // paddingTop: 5,
    // paddingBottom: 5,
    display: "flex",
    width: "100%",
    // borderColor: "#333",
  },
});

const BillOfLadingPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Document Header */}
      <View style={styles.header}>STRAIGHT BILL OF LADING - SHORT FORM</View>

      {/* Carrier Information Section */}
      <View style={styles.boxFlex}>
        <View style={styles.boxedSectionOne}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Carrier Name:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Phone:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Carrier Address:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Date:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>City:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Province/Postal:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>SAC:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>DUNS:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.boxedSectionOne2}>
          <View
            style={{
              borderBottom: "1px solid #000",
              width: "100%",
              paddingTop: 10,
              textAlign: "center",
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.fieldLabel}>SHIPMENT IDENTIFICTION NO.</Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 10,
              textAlign: "center",
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.fieldLabel}>FREIGHT BILL PRO NO.</Text>
          </View>
        </View>
      </View>

      {/* Carrier Information Section */}
      <View style={styles.boxFlex}>
        <View style={{ ...styles.boxedSectionOne, width: "50%" }}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>TO:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Consignee:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Address:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>City:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Province/Postal:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.boxedSectionOne2,
            width: "50%",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <View
            style={{
              borderBottom: "1px solid #000",
              width: "100%",
              paddingTop: 10,
              textAlign: "center",
              paddingBottom: 20,
              display: "flex",
              height: "30%",
              flexDirection: "column",
            }}
          >
            <Text style={styles.fieldLabel}>TRAILER/CAR NUMBER</Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 10,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              height: "70%",
              paddingLeft: 10,
            }}
          >
            <Text style={styles.fieldLabel}>ROUTE</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxFlex}>
        <View style={{ ...styles.boxedSectionOne, width: "50%" }}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>FROM:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Shipper:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Address:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>City:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Province/Postal:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.boxedSectionOne2,
            width: "50%",
            padding: 0,
          }}
        >
          <View
            style={{
              width: "100%",
              //   paddingTop: 10,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              height: "70%",
              paddingLeft: 10,
            }}
          >
            <Text style={styles.fieldLabel}>SPECIAL INSTRUCTIONS</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxFlex}>
        <View style={{ ...styles.boxedSectionOne, width: "50%" }}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>FOR PAYMENT SEND BILL TO:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Name:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Address:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>City:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>Province/Postal:</Text>
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.boxedSectionOne2,
            width: "50%",
            padding: 0,
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              width: "100%",
              //   paddingTop: 10,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              height: "90%",
              paddingLeft: 10,
            }}
          >
            <Text style={styles.fieldLabel}>SHIPPER'S INTERNAL DATA</Text>
          </View>
          <View
            style={{
              width: "50%",
              paddingTop: 2,
              display: "flex",
              //   flexDirection: "column",
              height: "10%",
              paddingLeft: 10,
              border: "1px solid #000",
              borderLeft: "0px",
              borderBottom: "0px",
            }}
          >
            <Text style={styles.fieldLabel}>SID NO.</Text>
          </View>
        </View>
      </View>

      {/* Table Header */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Number Shipping Units
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "5%",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            *HQ
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "55%",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Kinds of Packaging, Description of Articles, Special Marks and
            Exceptions{" "}
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Code
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Weight Subject to Correction
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Rate
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Charges
          </Text>
        </View>

        {/* Table Rows with Alternating Colors */}
        {[...Array(10).keys()].map((rowIndex) => {
          const isOdd = rowIndex % 2 === 0;

          const customStyles = {
            ...styles.tableCol,
            backgroundColor: isOdd ? "#ffffff" : "#e0e0e0",
          };
          return (
            <View style={{ ...styles.tableRow, height: "25px" }} key={rowIndex}>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "5%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "55%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
            </View>
          );
        })}
      </View>

      {/* Payment Section */}
      <View style={styles.boxed}>
        <Text style={styles.boxedTitle}>Payment Information</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.fieldLabel}>Payment Terms:</Text>
            <Text style={styles.fieldContent}>□ Prepaid □ Collect</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.fieldLabel}>C.O.D. Amount:</Text>
            <Text style={styles.fieldContent}>__________________________</Text>
          </View>
        </View>
      </View>

      {/* Signatures Section */}
      <View style={styles.signature}>
        <Text>Signature of Shipper: __________________________</Text>
        <Text>Signature of Carrier: __________________________</Text>
      </View>

      {/* Terms and Conditions Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.sectionTitle}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Received, subject to classifications and tariffs in effect on the date
          of issue... [full terms and conditions text here as required]
        </Text>
      </View>
    </Page>
  </Document>
);

export default BillOfLadingPDF;
