import streamlit as st
import pandas as pd
import plotly.graph_objects as go
import qrcode
from io import BytesIO
from PIL import Image

# Set page config
st.set_page_config(
    page_title="Dragon Therapy Dashboard",
    page_icon="🦕",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS styling
st.markdown("""
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    [data-testid="stMainBlockContainer"] {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
        color: #e2e8f0;
    }
    
    .metric-card {
        background: linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(30, 27, 75, 0.8));
        padding: 20px;
        border-radius: 15px;
        border: 1px solid rgba(59, 130, 246, 0.3);
        text-align: center;
    }
    
    .stat-blue {
        background: linear-gradient(135deg, #1e3a8a, #1e40af);
        padding: 20px;
        border-radius: 15px;
        border: 1px solid rgba(59, 130, 246, 0.3);
        text-align: center;
        color: white;
    }
    
    .stat-pink {
        background: linear-gradient(135deg, #831843, #be185d);
        padding: 20px;
        border-radius: 15px;
        border: 1px solid rgba(236, 72, 153, 0.3);
        text-align: center;
        color: white;
    }
    
    .task-card {
        padding: 20px;
        border-radius: 15px;
        color: white;
        margin: 10px 0;
    }
    
    .task-cyan {
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(14, 165, 233, 0.2));
        border: 1px solid rgba(6, 182, 212, 0.5);
    }
    
    .task-purple {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.2));
        border: 1px solid rgba(168, 85, 247, 0.5);
    }
    
    .task-orange {
        background: linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(249, 115, 22, 0.2));
        border: 1px solid rgba(251, 146, 60, 0.5);
    }
    
    h1 {
        color: #60a5fa;
        text-align: center;
        font-size: 48px;
        margin: 20px 0;
    }
    
    h2 {
        color: #93c5fd;
        margin: 30px 0 20px 0;
    }
    
    h3 {
        color: #bfdbfe;
    }
</style>
""", unsafe_allow_html=True)

# Title with dragon emoji
col1, col2, col3 = st.columns([1, 1, 1])
with col2:
    st.markdown("<div style='text-align: center; font-size: 80px; margin: 10px 0;'>🦕</div>", unsafe_allow_html=True)

st.markdown("<h1>Dragon Therapy</h1>", unsafe_allow_html=True)
st.markdown("<p style='text-align: center; color: #c4b5fd; font-size: 16px;'>Clinical Dashboard</p>", unsafe_allow_html=True)

# Patient Profile Section
st.markdown("<h2>👤 Patient Profile</h2>", unsafe_allow_html=True)
col1, col2, col3 = st.columns([1, 2, 1])

with col2:
    st.markdown("""
    <div style='text-align: center; padding: 20px; background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 15px; border: 1px solid rgba(168, 85, 247, 0.3);'>
        <div style='font-size: 60px; margin: 10px 0;'>🧑</div>
        <h3 style='color: white; margin: 10px 0;'>Alex Ray</h3>
        <p style='color: #c084fc; font-size: 16px;'>Age: 7 years</p>
    </div>
    """, unsafe_allow_html=True)

# Stats Section
st.markdown("<h2>📊 Statistics</h2>", unsafe_allow_html=True)
col1, col2 = st.columns(2)

with col1:
    st.markdown("""
    <div class='stat-blue'>
        <p style='font-size: 14px; color: #bfdbfe; margin: 0; text-transform: uppercase; letter-spacing: 2px;'>Sessions Completed</p>
        <p style='font-size: 48px; font-weight: bold; color: #93c5fd; margin: 10px 0;'>24</p>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class='stat-pink'>
        <p style='font-size: 14px; color: #fbcfe8; margin: 0; text-transform: uppercase; letter-spacing: 2px;'>Total Play Time</p>
        <p style='font-size: 48px; font-weight: bold; color: #f472b6; margin: 10px 0;'>6.2h</p>
    </div>
    """, unsafe_allow_html=True)

# Progress Chart
st.markdown("<h2>📈 Overall Fine Motor Skill Progression</h2>", unsafe_allow_html=True)
st.markdown("<p style='color: #93c5fd; font-size: 14px;'>30-Day Performance Trend</p>", unsafe_allow_html=True)

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
    line=dict(color='#60a5fa', width=4),
    marker=dict(size=10, color='#3b82f6', line=dict(color='white', width=2))
))

fig.update_layout(
    plot_bgcolor='rgba(15, 23, 42, 0.5)',
    paper_bgcolor='rgba(0, 0, 0, 0)',
    font=dict(color='#e2e8f0', size=12),
    hovermode='x unified',
    margin=dict(l=0, r=0, t=0, b=0),
    xaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)'),
    yaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)', range=[0, 100])
)

st.plotly_chart(fig, use_container_width=True)

# Task Cards Section
st.markdown("<h2>🎯 Task-Specific Modules</h2>", unsafe_allow_html=True)

col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
    <div class='task-card task-cyan'>
        <div style='font-size: 40px; margin-bottom: 10px;'>🥚</div>
        <h3 style='margin: 10px 0;'>Motor Planning</h3>
        <p style='color: #06b6d4; font-size: 14px; margin: 5px 0;'>Egg Rubbing</p>
        <p style='font-size: 24px; font-weight: bold; margin: 10px 0; color: #22d3ee;'>4/5</p>
        <p style='color: #9cadce; font-size: 12px;'>Smoothness: 8.4/10</p>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class='task-card task-purple'>
        <div style='font-size: 40px; margin-bottom: 10px;'>🐚</div>
        <h3 style='margin: 10px 0;'>Pincer Grasp</h3>
        <p style='color: #a855f7; font-size: 14px; margin: 5px 0;'>Shell Clearing</p>
        <p style='font-size: 24px; font-weight: bold; margin: 10px 0; color: #d8b4fe;'>3/5</p>
        <p style='color: #e9d5ff; font-size: 12px;'>Success Rate: 85%</p>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown("""
    <div class='task-card task-orange'>
        <div style='font-size: 40px; margin-bottom: 10px;'>🍎</div>
        <h3 style='margin: 10px 0;'>Force Modulation</h3>
        <p style='color: #fb923c; font-size: 14px; margin: 5px 0;'>Fruit Squeezing</p>
        <p style='font-size: 24px; font-weight: bold; margin: 10px 0; color: #fed7aa;'>2/5</p>
        <p style='color: #fde68a; font-size: 12px;'>Target Range: 72%</p>
    </div>
    """, unsafe_allow_html=True)

# Success Rate Chart
st.markdown("<h2>📊 Success Rates by Session</h2>", unsafe_allow_html=True)

success_data = pd.DataFrame({
    'Session': ['S1', 'S2', 'S3', 'S4', 'S5'],
    'Success Rate': [65, 72, 78, 81, 85]
})

fig_bar = go.Figure()
fig_bar.add_trace(go.Bar(
    x=success_data['Session'],
    y=success_data['Success Rate'],
    marker=dict(color=['#3b82f6', '#06b6d4', '#a855f7', '#fb923c', '#ec4899']),
    text=success_data['Success Rate'],
    textposition='auto',
))

fig_bar.update_layout(
    plot_bgcolor='rgba(15, 23, 42, 0.5)',
    paper_bgcolor='rgba(0, 0, 0, 0)',
    font=dict(color='#e2e8f0', size=12),
    showlegend=False,
    margin=dict(l=0, r=0, t=0, b=0),
    xaxis=dict(showgrid=False),
    yaxis=dict(showgrid=True, gridcolor='rgba(51, 65, 85, 0.3)', range=[0, 100])
)

st.plotly_chart(fig_bar, use_container_width=True)

# Therapist Notes
st.markdown("<h2>📝 Recent Observations</h2>", unsafe_allow_html=True)

notes_container = st.container()
with notes_container:
    st.markdown("""
    <div style='background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8)); 
                border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 15px; padding: 20px; color: #e2e8f0;'>
        <p style='margin: 10px 0; line-height: 1.6;'>
        Alex shows strong improvement in motor planning tasks. The egg rubbing activity demonstrates increased movement smoothness and reduced compensatory patterns. Continue encouraging slow, deliberate movements.
        </p>
        <p style='margin: 10px 0; line-height: 1.6;'>
        Pincer grasp strength is progressing well. Consider increasing difficulty level next session. Force modulation requires additional attention—focus on tactile feedback exercises to improve grip calibration.
        </p>
        <p style='color: #94a3b8; font-size: 12px; margin-top: 15px;'>
        ✏️ Last updated: Oct 18, 2025 by Dr. Sarah Martinez, PT
        </p>
    </div>
    """, unsafe_allow_html=True)

# Edit Notes Button
if st.button("✏️ Edit Notes", key="edit_notes", use_container_width=False):
    st.info("Edit Notes feature - Would open in a modal in production app")

# QR Code Section
st.markdown("<hr style='margin: 40px 0; border: 1px solid rgba(100, 116, 139, 0.3);'>", unsafe_allow_html=True)
st.markdown("<h2 style='text-align: center;'>📱 Share Dashboard</h2>", unsafe_allow_html=True)

col1, col2, col3 = st.columns([1, 1, 1])
with col2:
    st.markdown("""
    <p style='text-align: center; color: #93c5fd; font-size: 14px; margin-bottom: 20px;'>
    Scan the QR code below to share this dashboard
    </p>
    """, unsafe_allow_html=True)
    
    # Generate QR code
    try:
        # Get the Streamlit app URL
        qr_url = "https://dragonthearpy.streamlit.app/"
        
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(qr_url)
        qr.make(fit=True)
        
        # Use standard black and white for better scanning
        img = qr.make_image(fill_color="black", back_color="white")
        
        # Convert to bytes
        buf = BytesIO()
        img.save(buf, format='PNG')
        buf.seek(0)
        
        st.image(buf, width=280)
        st.markdown(f"<p style='text-align: center; color: #60a5fa; font-size: 12px;'>{qr_url}</p>", unsafe_allow_html=True)
        
    except Exception as e:
        st.error(f"Error generating QR code: {e}")

st.markdown("<p style='text-align: center; color: #64748b; font-size: 12px; margin-top: 40px;'>© 2025 Dino Keeper Clinical Dashboard</p>", unsafe_allow_html=True)
