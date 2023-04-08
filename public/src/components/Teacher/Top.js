import React, { useState } from "react";
import group from "./../images/Mask Group.png";
export const Top = ({first_name}) => {
    
    return (
        <div class="top">
        <div class="welcome">
            <p
                style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#F05D46",
                }}
            >
                Welcome back {first_name}!
            </p>
            <p
                style={{ fontSize: "small", fontWeight: "500", color: "#092433" }}
            >
                Check your dashboard for a quick view of what’s pending and new
                updates.
            </p>
        </div>
        <img src={group} class="group" />
    </div>
    );
  };