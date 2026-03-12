import { PortfolioConfig, ContactInfo, ProfileInfo } from '@/types/portfolio';

class ConfigParser {
  private config: PortfolioConfig;

  constructor(config: PortfolioConfig) {
    this.config = config;
  }

  // Generate system prompt for AI chatbot
  generateSystemPrompt(): string {
    const { personal, education, experience, skills, projects, personality, internship } = this.config;

    // Safe property access with fallbacks
    const programming = skills.programming || [];
    const ml_ai = skills.ml_ai || [];
    const web_development = skills.web_development || [];
    const databases = skills.databases || [];
    const devops_cloud = skills.devops_cloud || [];
    const iot_hardware = skills.iot_hardware || [];
    const soft_skills = skills.soft_skills || [];

    return `
# Interview Scenario: You are ${personal.name}

You are ${personal.name} - ${personal.title}, currently in a professional interview setting. The person asking questions is an interviewer/recruiter/HR professional, and you are the candidate being interviewed. Respond authentically as if you are personally answering their questions during a real interview.

## Interview Persona & Communication Style
- Speak in first person ("I", "my", "me") - you ARE ${personal.name}
- Be professional, confident, and articulate
- Show enthusiasm for opportunities and challenges
- Demonstrate your knowledge and experience clearly
- Be humble but confident about your achievements
- Ask thoughtful questions back to the interviewer when appropriate
- Show genuine interest in the company/role (when relevant)
- Use professional language suitable for formal interviews

## Response Strategy - ALWAYS Use Tools
CRITICAL: You must use tools to provide comprehensive information, not just text responses!

- For "tell me about yourself" → use getPresentation tool
- For project-related questions → use getProjects tool  
- For technical skills questions → use getSkills tool
- For contact/networking questions → use getContact tool
- For resume/background questions → use getResume tool
- For internship/job/career questions → use getInternship tool

## Your Professional Background

### Personal Information
${personal.age ? `- Age: ${personal.age}` : ''}
- Current Status: ${personal.title}
- Location: ${personal.location}
- Education: ${education.current.degree} at ${education.current.institution} (graduating ${education.current.graduationDate})
- Academic Performance: ${education.current.cgpa ? `CGPA ${education.current.cgpa}` : 'N/A'}
- Achievements: ${(education.achievements || []).join(', ')}

### Technical Expertise
- Programming Languages: ${programming.join(', ')}
- ML/AI Technologies: ${ml_ai.join(', ')}
- Web Development: ${web_development.join(', ')}
- Database Systems: ${databases.join(', ')}
- DevOps & Cloud: ${devops_cloud.join(', ')}
- IoT & Hardware: ${iot_hardware.join(', ')}

### Professional Experience
${experience.map(exp => `- ${exp.position} at ${exp.company} (${exp.duration}): ${exp.description}`).join('\n')}

### Key Projects & Achievements
${projects.filter(p => p.featured).map(p => `- ${p.title}: ${p.description}`).join('\n')}

### Personality & Work Style
- Core Motivation: ${personality.motivation}
- Working Style: ${personality.workingStyle}
- Key Traits: ${personality.traits.join(', ')}
- Professional Interests: ${personality.interests.join(', ')}

### Career Goals & Availability
${internship.seeking ? `
- Seeking: ${internship.duration} internship/position starting ${internship.startDate}
- Focus Areas: ${internship.focusAreas.join(', ')}
- Career Goals: ${internship.goals}
- Availability: ${internship.availability}
` : ''}

## Interview Guidelines
- Always respond as if you're speaking directly to the interviewer
- Be specific about your experiences and achievements
- Show enthusiasm for learning and growth opportunities
- Demonstrate problem-solving abilities through examples
- Ask insightful questions about the role/company when appropriate
- Use tools to provide comprehensive, detailed responses
- Make the conversation feel natural and professional

REMEMBER: You are NOT an AI assistant - you are ${personal.name} being interviewed. Respond authentically and professionally!
`;
  }

  // Generate contact information
  generateContactInfo(): ContactInfo {
    const { personal, social } = this.config;

    return {
      name: personal.name,
      email: personal.email,
      handle: personal.handle,
      socials: [
        { name: 'LinkedIn', url: social.linkedin },
        { name: 'GitHub', url: social.github },
        { name: 'Twitter', url: social.twitter },
      ].filter(social => social.url !== '')
    };
  }

  // Generate profile information for presentation
  generateProfileInfo(): ProfileInfo {
    const { personal } = this.config;

    return {
      name: personal.name,
      age: personal.age ? `${personal.age} years old` : 'Professional Age',
      location: personal.location,
      description: personal.bio,
      src: personal.avatar,
      fallbackSrc: personal.fallbackAvatar
    };
  }

  // Generate skills data with categories
  generateSkillsData() {
    const { skills } = this.config;

    return [
      {
        category: 'Programming Languages',
        skills: skills.programming || [],
        color: 'bg-blue-50 text-blue-600 border border-blue-200'
      },
      {
        category: 'ML/AI Technologies',
        skills: skills.ml_ai || [],
        color: 'bg-purple-50 text-purple-600 border border-purple-200'
      },
      {
        category: 'Web Development',
        skills: skills.web_development || [],
        color: 'bg-green-50 text-green-600 border border-green-200'
      },
      {
        category: 'Databases',
        skills: skills.databases || [],
        color: 'bg-orange-50 text-orange-600 border border-orange-200'
      },
      {
        category: 'DevOps & Cloud',
        skills: skills.devops_cloud || [],
        color: 'bg-emerald-50 text-emerald-600 border border-emerald-200'
      },
      {
        category: 'IoT & Hardware',
        skills: skills.iot_hardware || [],
        color: 'bg-indigo-50 text-indigo-600 border border-indigo-200'
      },
      {
        category: 'Soft Skills',
        skills: skills.soft_skills || [],
        color: 'bg-amber-50 text-amber-600 border border-amber-200'
      }
    ].filter(category => category.skills && category.skills.length > 0);
  }

  // Generate project data for carousel
  generateProjectData() {
    return this.config.projects.map(project => ({
      category: project.category,
      title: project.title,
      src: project.images[0]?.src || '/placeholder.jpg',
      content: project // Pass the entire project object
    }));
  }

  // Generate preset replies based on questions
  generatePresetReplies() {
    const { personal } = this.config;

    const replies: Record<string, { reply: string; tool: string }> = {};

    // Only generate presets for main category questions - Translated to Spanish to match UI
    replies["¿Quién eres?"] = {
      reply: personal.bio,
      tool: "getPresentation"
    };

    replies["¿Cuáles son tus habilidades técnicas?"] = {
      reply: `Mi experiencia técnica abarca múltiples dominios...`,
      tool: "getSkills"
    };

    replies["¿Puedo ver tu currículum?"] = {
      reply: `Aquí tienes mi currículum con todos los detalles...`,
      tool: "getResume"
    };

    replies["¿Cómo puedo contactarte?"] = {
      reply: `Aquí tienes cómo puedes contactarme...`,
      tool: "getContact"
    };

    replies["¿Estás buscando nuevas oportunidades?"] = {
      reply: `Aquí están mis oportunidades actuales y disponibilidad...`,
      tool: "getInternship"
    };

    return replies;
  }

  // Generate resume details
  generateResumeDetails() {
    return this.config.resume;
  }

  // Generate internship information
  generateInternshipInfo() {
    const { internship, personal, social } = this.config;

    if (!internship.seeking) {
      return "No estoy buscando nuevas oportunidades en este momento.";
    }

    return `Esto es lo que estoy buscando 👇

- 📅 **Modalidad**: ${internship.duration} con inicio **${internship.startDate}**
- 🌍 **Ubicación**: ${internship.preferredLocation}
- 🧑‍💻 **Enfoque**: ${internship.focusAreas.join(', ')}
- 🛠️ **Estilo de trabajo**: ${internship.workStyle}
- 🎯 **Objetivos**: ${internship.goals}

📬 **Contáctame** vía:
- Email: ${personal.email}
- LinkedIn: ${social.linkedin}
- GitHub: ${social.github}

${internship.availability} ✌️`;
  }

  // Get all configuration data
  getConfig(): PortfolioConfig {
    return this.config;
  }
}

export default ConfigParser;
