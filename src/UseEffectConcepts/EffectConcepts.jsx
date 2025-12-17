import { useEffect, useState } from "react";

export default function EffectConcepts() {
  const [personalDetails, setPersonalDetails] = useState({ name: "SK", age: 25 });
  const [copyByReference, setCopyByReference] = useState(null);
  const [independentCopy, setIndependentCopy] = useState(null);

  // Assigning references (same object)
  const handleReferenceCopy = () => {
    setCopyByReference(personalDetails); 
    console.log("Reference Copy Created:", copyByReference);
    // They point to same memory
  };

  // Creating independent object (different memory)
  const handleIndependentCopy = () => {
    setIndependentCopy({ ...personalDetails }); 
    console.log("Independent Copy Created:", independentCopy);
  };

  // Updating original object
  const changeName = () => {
    setPersonalDetails((prev) => ({ ...prev, name: "Prawin" }));
  };

  const increaseAge = () => {
    setPersonalDetails((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  // 1️⃣ useEffect: Runs when object reference changes
  useEffect(() => {
    console.log("Effect 1: personalDetails reference changed", personalDetails);
  }, [personalDetails]);

  // 2️⃣ useEffect: Runs only when AGE inside object changes
  useEffect(() => {
    console.log("Effect 2: Age changed →", personalDetails.age);
  }, [personalDetails.age]);

  // 3️⃣ useEffect: Runs when actual OBJECT VALUE changes
  useEffect(() => {
    console.log("Effect 3: JSON comparison → personalDetails changed");
  }, [JSON.stringify(personalDetails)]);

  // 4️⃣ componentWillUnmount equivalent with cleanup
  useEffect(() => {
    console.log("Effect 4 Mounted");

    return () => {
      console.log("Component Unmounted → Cleanup called");
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Object Reference & useEffect Example</h2>

      <pre>personalDetails = {JSON.stringify(personalDetails)}</pre>
      <pre>copyByReference = {JSON.stringify(copyByReference)}</pre>
      <pre>independentCopy = {JSON.stringify(independentCopy)}</pre>

      <button onClick={handleReferenceCopy}>Make Reference Copy</button>
      <button onClick={handleIndependentCopy}>Make Independent Copy</button>
      <button onClick={changeName}>Change Name → "Prawin"</button>
      <button onClick={increaseAge}>Increase Age</button>

      <hr />

      <h3>Explanation:</h3>
      <ul>
        <li><strong>copyByReference</strong> changes whenever personalDetails changes (same object).</li>
        <li><strong>independentCopy</strong> does NOT change when personalDetails changes.</li>
        <li><strong>[personalDetails]</strong> runs when object reference changes.</li>
        <li><strong>[personalDetails.age]</strong> runs only when age changes.</li>
        <li><strong>[JSON.stringify(personalDetails)]</strong> runs when the values change.</li>
      </ul>
    </div>
  );
}
