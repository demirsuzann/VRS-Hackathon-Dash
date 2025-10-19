import streamlit as st
import pandas as pd
import plotly.graph_objects as go
import qrcode
from io import BytesIO

# Page config - use 'wide' for better mobile responsiveness
st.set_page_config(
    page_title="Dragon Therapy",
    page_icon="🦕",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Mobile-optimized CSS
st.markdown("""
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    body, [data-testid="stAppViewContainer"], [data-testid="stMainBlockContainer"] {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%) !important;
        color: #e2e8f0;
    }
    
    h1, h2 {
        text-align: center;
        color: #60a5fa;
        margin-top: 15px !important;
        margin-bottom: 15px !important;
    }
    
    h2 {
        font-size: 1.5em;
        color: #93c5fd;
    }
    
    /* Mobile padding adjustments */
    [data-testid="stMainBlockContainer"] {
        padding: 10px !important;
        max-width: 100% !important;
    }
    
    .metric {
        background: rgba(30, 58, 138, 0.6) !important;
        padding: 15px !important;
        border-radius: 10px !important;
        border: 1px solid rgba(59, 130, 246, 0.3) !important;
    }
    
    /* Column spacing */
    [data-testid="column"] {
        padding: 5px !important;
    }
    
    /* Divider styling */
    hr {
        margin: 15px 0 !important;
        border: 1px solid rgba(100, 116, 139, 0.3) !important;
    }
</style>
""", unsafe_allow_html=True)

# Title with dragon emoji
st.markdown("<div style='text-align: center; font-size: 70px; margin: 10px 0;'>🦕</div>", unsafe_allow_html=True)
st.markdown("<h1 style='font-size: 2em; margin: 5px 0;'>Dragon Therapy</h1>", unsafe_allow_html=True)
st.markdown("<p style='text-align: center; color: #c4b5fd; font-size: 13px;'>Fine Motor Skill Tracking</p>", unsafe_allow_html=True)
st.divider()

# Patient Profile Section
st.markdown("""
<div style='background: linear-gradient(135deg, #1e3a8a, #1e40af); 
            padding: 20px; 
            border-radius: 15px; 
            border: 2px solid #60a5fa;
            text-align: center;
            margin: 15px 0;'>
    <p style='font-size: 24px; color: #93c5fd; margin: 0; font-weight: bold;'>👤 Patient Information</p>
    <p style='font-size: 32px; color: #60a5fa; margin: 10px 0; font-weight: bold;'>Alex Ray</p>
    <p style='font-size: 18px; color: #bfdbfe; margin: 5px 0;'>Age: <span style='font-weight: bold;'>7 years old</span></p>
</div>
""", unsafe_allow_html=True)

# Stats Section - side by side with borders
col1, col2 = st.columns(2)

with col1:
    st.markdown("""
    <div style='background: rgba(30, 58, 138, 0.8); 
                padding: 20px; 
                border-radius: 12px; 
                border: 2px solid #60a5fa;
                text-align: center;'>
        <p style='font-size: 13px; color: #93c5fd; margin: 0; text-transform: uppercase; letter-spacing: 1px;'>📊 Total Sessions</p>
        <p style='font-size: 40px; color: #60a5fa; margin: 10px 0; font-weight: bold;'>24</p>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div style='background: rgba(131, 24, 67, 0.8); 
                padding: 20px; 
                border-radius: 12px; 
                border: 2px solid #ec4899;
                text-align: center;'>
        <p style='font-size: 13px; color: #f472b6; margin: 0; text-transform: uppercase; letter-spacing: 1px;'>⏱️ Play Time</p>
        <p style='font-size: 40px; color: #f472b6; margin: 10px 0; font-weight: bold;'>6.2h</p>
    </div>
    """, unsafe_allow_html=True)

st.divider()

# Progress Chart
st.markdown("<h2>📈 30-Day Progress</h2>", unsafe_allow_html=True)

# Generate progress data
progress_data = pd.DataFrame({
    'Day': ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
    'Score': [42, 48, 55, 62, 68, 75, 78]
})

fig = go.Figure()
fig.add_trace(go.Scatter(
    x=progress_data['Day'],
    y=progress_data['Score'],
    mode='lines+markers',
    name='Motor Skill Score',
    line=dict(color='#60a5fa', width=3),
    marker=dict(size=8, color='#3b82f6')
))

fig.update_layout(
    plot_bgcolor='rgba(15, 23, 42, 0.5)',
    paper_bgcolor='rgba(0, 0, 0, 0)',
    font=dict(color='#e2e8f0', size=10),
    hovermode='x unified',
    margin=dict(l=30, r=30, t=20, b=20),
    height=300,
    xaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)'),
    yaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)', range=[0, 100])
)

st.plotly_chart(fig, use_container_width=True)
st.divider()

# Task Cards Section
st.markdown("<h2>🎯 Tasks</h2>", unsafe_allow_html=True)

# Mobile: stack vertically, Desktop: 3 columns
col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
    <div style='background: rgba(6, 182, 212, 0.2); padding: 12px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.5); text-align: center;'>
        <p style='font-size: 28px; margin: 5px 0;'>🥚</p>
        <p style='font-size: 12px; margin: 3px 0; color: #60a5fa;'><b>Motor Planning</b></p>
        <p style='font-size: 11px; color: #93c5fd;'>Level: 4/5</p>
        <p style='font-size: 11px; color: #93c5fd;'>Smoothness: 8.4/10</p>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div style='background: rgba(168, 85, 247, 0.2); padding: 12px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.5); text-align: center;'>
        <p style='font-size: 28px; margin: 5px 0;'>🐚</p>
        <p style='font-size: 12px; margin: 3px 0; color: #d8b4fe;'><b>Pincer Grasp</b></p>
        <p style='font-size: 11px; color: #d8b4fe;'>Level: 3/5</p>
        <p style='font-size: 11px; color: #d8b4fe;'>Success: 85%</p>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown("""
    <div style='background: rgba(251, 146, 60, 0.2); padding: 12px; border-radius: 8px; border: 1px solid rgba(251, 146, 60, 0.5); text-align: center;'>
        <p style='font-size: 28px; margin: 5px 0;'>🍎</p>
        <p style='font-size: 12px; margin: 3px 0; color: #fed7aa;'><b>Force Modulation</b></p>
        <p style='font-size: 11px; color: #fed7aa;'>Level: 2/5</p>
        <p style='font-size: 11px; color: #fed7aa;'>Target: 72%</p>
    </div>
    """, unsafe_allow_html=True)

st.divider()

# Success Rate Chart
st.markdown("<h2>📊 Success Rate</h2>", unsafe_allow_html=True)

success_data = pd.DataFrame({
    'Session': ['S1', 'S2', 'S3', 'S4', 'S5'],
    'Success Rate': [65, 72, 78, 81, 85]
})

fig_bar = go.Figure()
fig_bar.add_trace(go.Bar(
    x=success_data['Session'],
    y=success_data['Success Rate'],
    marker=dict(color=['#3b82f6', '#06b6d4', '#a855f7', '#fb923c', '#ec4899']),
))

fig_bar.update_layout(
    plot_bgcolor='rgba(15, 23, 42, 0.5)',
    paper_bgcolor='rgba(0, 0, 0, 0)',
    font=dict(color='#e2e8f0', size=10),
    showlegend=False,
    margin=dict(l=30, r=30, t=20, b=20),
    height=300,
    xaxis=dict(showgrid=False),
    yaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)', range=[0, 100])
)

st.plotly_chart(fig_bar, use_container_width=True)
st.divider()

# Therapist Notes
st.markdown("<h2>📝 Notes</h2>", unsafe_allow_html=True)

st.markdown("""
<div style='background: rgba(30, 41, 59, 0.6); padding: 12px; border-radius: 8px; border-left: 3px solid #60a5fa;'>
    <p style='font-size: 12px; color: #e2e8f0; margin: 5px 0; line-height: 1.5;'>
    Alex shows strong improvement in motor planning. Pincer grasp progressing well. Force modulation needs focus.
    </p>
    <p style='font-size: 11px; color: #94a3b8; margin: 8px 0 0 0;'>
    <i>Last updated: Oct 18, 2025 by Dr. Sarah Martinez, PT</i>
    </p>
</div>
""", unsafe_allow_html=True)

if st.button("✏️ Edit Notes", use_container_width=True):
    st.info("Edit feature - coming soon!")

st.divider()

# QR Code Section
st.markdown("<h2 style='text-align: center;'>📱 Share</h2>", unsafe_allow_html=True)

# Full width container
col_qr = st.columns(1)[0]
with col_qr:
    st.markdown("<p style='text-align: center; font-size: 12px; color: #c4b5fd;'>Scan to access:</p>", unsafe_allow_html=True)
    
    # Generate QR code
    qr_url = "https://dragonthearpy.streamlit.app/"
    
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=8,
        border=2,
    )
    qr.add_data(qr_url)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    
    buf = BytesIO()
    img.save(buf, format='PNG')
    buf.seek(0)
    
    # Center the QR code
    col_space1, col_qr_img, col_space2 = st.columns([1, 2, 1])
    with col_qr_img:
        st.image(buf, use_container_width=True)
    
    st.markdown(f"<p style='text-align: center; color: #60a5fa; font-size: 10px; word-break: break-all;'>{qr_url}</p>", unsafe_allow_html=True)

st.divider()
st.markdown("<p style='text-align: center; color: #64748b; font-size: 10px;'>© 2025 Dragon Therapy</p>", unsafe_allow_html=True)
