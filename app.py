import streamlit as st
import pandas as pd
import plotly.graph_objects as go
import qrcode
from io import BytesIO

# Page config
st.set_page_config(
    page_title="Dragon Therapy",
    page_icon="🦕",
    layout="centered",
    initial_sidebar_state="collapsed"
)

# Remove padding and set dark theme
st.markdown("""
<style>
    .main {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    }
    
    body {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
        color: #e2e8f0;
    }
    
    [data-testid="stAppViewContainer"] {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    }
</style>
""", unsafe_allow_html=True)

# Title with dragon emoji
col1, col2, col3 = st.columns([1, 1, 1])
with col2:
    st.markdown("<div style='text-align: center; font-size: 100px;'>🦕</div>", unsafe_allow_html=True)

st.markdown("<h1>Dragon Therapy</h1>", unsafe_allow_html=True)
st.markdown("<p style='text-align: center; color: #c4b5fd; font-size: 14px;'>Fine Motor Skill Tracking</p>", unsafe_allow_html=True)
st.divider()

# Patient Profile Section
st.markdown("<h2>👤 Patient: Alex Ray (7 years)</h2>", unsafe_allow_html=True)

# Stats Section
col1, col2 = st.columns(2)

with col1:
    st.metric(label="Sessions", value="24")

with col2:
    st.metric(label="Play Time", value="6.2h")

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
    font=dict(color='#e2e8f0', size=12),
    hovermode='x unified',
    margin=dict(l=0, r=0, t=20, b=0),
    height=350,
    xaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)'),
    yaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)', range=[0, 100])
)

st.plotly_chart(fig, use_container_width=True)
st.divider()

# Task Cards Section
st.markdown("<h2>🎯 Tasks</h2>", unsafe_allow_html=True)

col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
    **🥚 Motor Planning**
    
    Level: 4/5
    
    Smoothness: 8.4/10
    """)

with col2:
    st.markdown("""
    **🐚 Pincer Grasp**
    
    Level: 3/5
    
    Success: 85%
    """)

with col3:
    st.markdown("""
    **🍎 Force Modulation**
    
    Level: 2/5
    
    Target: 72%
    """)

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
    font=dict(color='#e2e8f0', size=12),
    showlegend=False,
    margin=dict(l=0, r=0, t=20, b=0),
    height=350,
    xaxis=dict(showgrid=False),
    yaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)', range=[0, 100])
)

st.plotly_chart(fig_bar, use_container_width=True)
st.divider()

# Therapist Notes
st.markdown("<h2>📝 Notes</h2>", unsafe_allow_html=True)

st.markdown("""
Alex shows strong improvement in motor planning tasks. The egg rubbing activity demonstrates increased movement smoothness.

Pincer grasp strength is progressing well. Force modulation requires additional attention.

*Last updated: Oct 18, 2025 by Dr. Sarah Martinez, PT*
""")

if st.button("✏️ Edit Notes"):
    st.info("Edit feature - coming soon!")

st.divider()

# QR Code Section
st.markdown("<h2 style='text-align: center;'>📱 Share</h2>", unsafe_allow_html=True)

col1, col2, col3 = st.columns([1, 1, 1])
with col2:
    st.markdown("**Scan to access:**")
    
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
    
    st.image(buf, use_container_width=True)
    st.markdown(f"<p style='text-align: center; color: #60a5fa; font-size: 11px; word-break: break-all;'>{qr_url}</p>", unsafe_allow_html=True)

st.divider()
st.markdown("<p style='text-align: center; color: #64748b; font-size: 11px;'>© 2025 Dragon Therapy</p>", unsafe_allow_html=True)
